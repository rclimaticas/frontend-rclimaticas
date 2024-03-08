import requests
from bs4 import BeautifulSoup

url = "https://www.sciencedirect.com/science/article/pii/S2352146522003556"

# Adicionando o cabeçalho de usuário
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://www.example.com',
    'Accept-Language': 'en-US,en;q=0.9',
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Encontrando o elemento com a classe 'abstract author'
    abstract_author_element = soup.find("div", class_="abstract author")

    if abstract_author_element:
        # Obtendo o texto dentro do elemento
        abstract_author_text = abstract_author_element.get_text(strip=True)
        print("Texto da classe 'abstract author':", abstract_author_text)
    else:
        print("Classe 'abstract author' não encontrada na página.")
else:
    print("Erro ao acessar a página:", response.status_code)
