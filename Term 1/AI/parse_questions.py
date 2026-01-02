
import os
import re
import json

def parse_card_text(text):
    cards = []
    # Normalize line endings
    text = text.replace('\r\n', '\n')
    
    # Regex to find card headers (e.g. "بطاقة 1" or "Card 1")
    card_pattern = re.compile(r'(?:بطاقة|Card)\s+\d+', re.MULTILINE | re.IGNORECASE)
    
    # Find all matches
    matches = list(card_pattern.finditer(text))
    
    for i in range(len(matches)):
        start = matches[i].start()
        end = matches[i+1].start() if i + 1 < len(matches) else len(text)
        
        card_content = text[start:end].strip()
        lines = card_content.split('\n')
        
        question_start = -1
        options_start = -1
        answer_start = -1
        
        for idx, line in enumerate(lines):
            clean_line = line.strip().lower()
            # Loose matching to handle potential variations
            if ('السؤال' in clean_line or 'question' in clean_line) and ':' in clean_line:
                question_start = idx
            elif ('الاختيارات' in clean_line or 'choices' in clean_line) and ':' in clean_line:
                options_start = idx
            elif ('الإجابة' in clean_line or 'answer' in clean_line) and ':' in clean_line:
                answer_start = idx
                
        if question_start == -1:
            continue
            
        # Extract Question
        q_end = options_start if options_start != -1 else answer_start
        question_lines = lines[question_start+1:q_end]
        question_text = "\n".join([l.strip() for l in question_lines if l.strip()])
        
        # Extract Options (if any)
        options_text = ""
        if options_start != -1:
            opts_end = answer_start
            options_lines = lines[options_start+1:opts_end]
            options_text = "\n".join([l.strip() for l in options_lines if l.strip()])
            
        # Extract Answer
        answer_text = ""
        if answer_start != -1:
            answer_lines = lines[answer_start+1:]
            answer_text = "\n".join([l.strip() for l in answer_lines if l.strip()])
            
        # Combine Question + Options for the 'q' field (Legacy Flashcard Format)
        final_q = question_text
        if options_text:
            separator = "الاختيارات:" if "الاختيارات" in text else "Choices:"
            final_q += f"\n\n{separator}\n" + options_text
            
        # Structure Options for Quiz Mode
        structured_options = []
        correct_index = -1
        
        if options_text:
            # Check if it's a key-value list (a. ..., b. ...)
            # Or a set-like list {..., ...}
            if options_text.strip().startswith('{') and '}' in options_text:
                # Handle set format: {op1, op2, ...}
                content = options_text.strip().strip('{}')
                structured_options = [opt.strip() for opt in content.split(',') if opt.strip()]
            else:
                # Handle standard list separated by newlines
                raw_opts = options_text.split('\n')
                # Remove "a. ", "b. ", "A) " prefixes if present to get clean text
                structured_options = []
                for optim in raw_opts:
                    # Regex to strip leading "a. ", "1. ", "A) "
                    clean_opt = re.sub(r'^[\w\d]+[\.\)]\s*', '', optim).strip()
                    structured_options.append(clean_opt)

        # Determine Correct Answer Index
        clean_answer = answer_text.strip()
        # 1. Try to match by index letter (A, B, C...)
        first_word = clean_answer.split(' ')[0].replace('.', '').replace(')', '').strip().lower()
        if len(first_word) == 1 and first_word.isalpha():
            idx = ord(first_word) - ord('a')
            if 0 <= idx < len(structured_options):
                correct_index = idx
        
        # 2. If not found, try to match by text content
        if correct_index == -1 and structured_options:
            # Normalize answer for comparison
            answ_norm = clean_answer.lower()
            # If answer starts with "a. text", strip the prefix
            answ_norm = re.sub(r'^[\w\d]+[\.\)]\s*', '', answ_norm).strip()
            
            for i, opt in enumerate(structured_options):
                if answ_norm == opt.lower() or answ_norm in opt.lower():
                    correct_index = i
                    break
        
        cards.append({
            "q": final_q,
            "a": answer_text,
            "cat": "BEBO",
            "opts": structured_options,
            "correct": correct_index
        })
        
    return cards

def main():
    base_path = r"e:/Manhagko/Term 1/AI"
    files = ["Raw.txt"]
    
    full_text = ""
    for f in files:
        path = os.path.join(base_path, f)
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as file:
                full_text += "\n" + file.read()
    
    questions = parse_card_text(full_text)
    
    # Generate JS content like: const allFlashcards = [...];
    js_content = "const allFlashcards = " + json.dumps(questions, ensure_ascii=False, indent=4) + ";"
    
    with open(os.path.join(base_path, "ai_questions_parsed.js"), "w", encoding="utf-8") as out:
        out.write(js_content)
        
    print(f"Parsed {len(questions)} questions.")

if __name__ == "__main__":
    main()
