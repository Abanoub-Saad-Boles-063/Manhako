import pypdf
import json
import re

pdf_path = r"e:\Manhagko\Term 1\mechanics\كتاب Math M-1-42.pdf"

try:
    reader = pypdf.PdfReader(pdf_path)
    text_content = ""
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        text_content += f"\n--- Page {i+1} ---\n{text}"
    
    # Save to a file to avoid console buffer issues with large text
    with open("mechanics_text_dump.txt", "w", encoding="utf-8") as f:
        f.write(text_content)
        
    print("Extraction complete. Text saved to mechanics_text_dump.txt")

except Exception as e:
    print(f"Error: {e}")
