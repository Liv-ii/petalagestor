INTRODUÇÃO
Este relatório descreve o desenvolvimento do sistema Pétala Gestão, criado para atender às necessidades do centro de distribuição Neo Botânica, especializado em flores.
O objetivo foi construir (ou arrumar  uma solução funcional, bonita e prática para cadastrar fornecedores, controlar estoque e obter dados de endereço automaticamente via CEP.

REALIZAÇÕES
Criei a pasta peletaGestor no meu ambiente local;
Usei os arquivos fornecidos como base, sem necessidade de correção de erros;
Mantive a lógica principal e apenas organizei o conteúdo da melhor forma;
Criei o banco floricultura com a tabela flores;
Adicionei a restrição NOT NULL nos campos obrigatórios, garantindo que os dados mais importantes sempre sejam preenchidos;
Desenvolvi um visual inspirado em floriculturas modernas: cores suaves como rosé e verde claro;
Usei fontes do Google Fonts (Playfair Display e Montserrat) para dar um ar elegante e leve;
Organizei o CSS em um arquivo externo limpo e semântico, com foco em usabilidade e beleza.

INTEGRAÇÕ DA CHAVE API
O formulário utiliza a API ViaCEP para preencher automaticamente os dados de endereço com base no CEP;
Para evitar que o formulário fosse enviado automaticamente ao pressionar Enter no campo de CEP, adicionei uma verificação no JavaScript para impedir o envio antes do preenchimento completo dos dados.

VERSIONAMENTO COM GIT E GITHUB
Iniciei o repositório com git init e realizei todos os commits importantes com mensagens claras;
Criei um repositório no GitHub chamado petalagestor e publiquei o projeto com versionamento completo.

FUNCIONALIDADES
Cadastrar fornecedores com nome, tipo de flor, preço unitário, quantidade em estoque e endereço;
Busca automática de endereço usando o CEP via API ViaCEP;
Visualização de todos os fornecedores cadastrados;
Funções de edição e exclusão de registros.

O QUE APRENDI COM O SISTEMA
Aprendi a construir um sistema completo, com foco em cadastro, organização de dados e integração com API externa. Além disso, aprendi a versionar um projeto com Git e GitHub.

DIFICULDADES ENCONTRADAS
A maior dificuldade foi relacionada ao uso do Git e GitHub. Mesmo tendo estudado o básico, enfrentei erros como:
Quando tentei adicionar um repositório remoto que já estava vinculado;
Erro (refspec) ao tentar dar push sem ter criado de fato um commit ou mesmo o branch main.
Também encontrei um problema menor no formulário HTML, onde, ao pressionar Enter no campo de CEP, o formulário era enviado automaticamente sem que a API ViaCEP terminasse de rodar os dados.

COMO REOLVI AS DIFICULDADES
No Git:
Usei o comando git remote set-url origin para corrigir a URL do repositório remoto;
Descobri que o erro do refspec acontecia porque ainda não tinha feito nenhum commit, então executei o git add . e git commit -m "Primeiro commit" antes de fazer o push;
Também entendi que o branch main precisa existir localmente antes de ser enviado.
No formulário:
Editei o JavaScript do viaCEP.js para impedir que o Enter enviasse o formulário no campo de CEP, permitindo que o usuário pressione Enter sem quebrar o fluxo da API.

MELHORIAS FUTURAS PARA TORNAR O SISTEMA COMERCIAL, RENTÁVEL E ESCALÁVEL
Caso o sistema Pétala Gestão fosse transformado em um produto real, estas são algumas ideias que poderiam torná-lo mais profissional:
Login com autenticação de usuários (admin e funcionários);
Painel de relatórios e gráficos com dados de estoque, vendas e fornecedores mais ativos;
Cadastro de clientes e pedidos, expandindo além do controle de fornecedores;
Integração com WhatsApp Business para facilitar contato com fornecedores;
