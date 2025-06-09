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
