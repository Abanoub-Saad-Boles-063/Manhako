
import pypdf

def extract_text_from_pdf(pdf_path, output_txt_path):
    print(f"Opening PDF: {pdf_path}")
    try:
        reader = pypdf.PdfReader(pdf_path)
        number_of_pages = len(reader.pages)
        print(f"Total Pages: {number_of_pages}")
        
        with open(output_txt_path, 'w', encoding='utf-8') as f:
            for i in range(number_of_pages):
                page = reader.pages[i]
                text = page.extract_text()
                f.write(f"--- Page {i+1} ---\n")
                f.write(text)
                f.write("\n\n")
        print(f"Text extracted to: {output_txt_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text_from_pdf(r"e:\Manhagko\Term 1\Math\كتاب Math Pure.pdf", r"e:\Manhagko\math_text_dump.txt")
