# Finanças da família

App de controle financeiro de Matheus, Paloma e Rhuan. Funciona no computador e no celular, com ícone próprio,
e os dados ficam salvos na nuvem (Firebase, do Google), sincronizados entre os aparelhos.

## Testar antes de configurar

Abra o `index.html` no navegador do computador. Ele roda em **modo teste**: os dados ficam
só naquele navegador. Use "Preencher com exemplo" para ver o painel, as colunas e os gráficos.

## Configuração (uma vez só, uns 30 minutos)

### 1. Criar o projeto no Firebase
1. Entre em https://console.firebase.google.com com sua conta Google.
2. Crie um projeto (ex.: `financas-casa`). O Google Analytics pode ficar desativado.

### 2. Criar os logins
1. Menu **Authentication** → **Vamos começar** → aba **Método de login** → **E-mail/senha** → ativar → salvar.
2. Aba **Usuários** → **Adicionar usuário**: seu e-mail e uma senha. Repita para a Paloma e para o Rhuan.
3. Na lista de usuários, copie o **UID do usuário** de cada um (um código de letras e números).
   Ele é usado nos passos 3 e 4 para definir o perfil de cada conta.

### 3. Criar o banco de dados
1. Menu **Firestore Database** → **Criar banco de dados**.
   Edição **Standard**, local **southamerica-east1 (São Paulo)**, modo **produção**.
2. Aba **Regras**: apague o que estiver lá e cole o conteúdo do arquivo `firestore.rules`.
   Troque `UID-DO-MATHEUS`, `UID-DA-PALOMA` e `UID-DO-RHUAN` pelos UIDs copiados no passo 2
   (mantenha as aspas) e clique em **Publicar**.

### 4. Ligar o app ao Firebase
1. Engrenagem ⚙ → **Configurações do projeto** → em "Seus apps", clique no ícone **Web** (`</>`).
2. Dê um apelido (ex.: `financas-web`) e registre. Não precisa marcar o Firebase Hosting.
3. Copie os valores do `firebaseConfig` que aparecerem (apiKey, authDomain, projectId...)
   para os campos correspondentes no arquivo `config.js`.
4. Ainda no `config.js`, em `somenteProprio`, troque `UID-DO-RHUAN` pelo UID do Rhuan
   (o mesmo das regras).

### 5. Publicar no GitHub Pages (grátis)
1. Crie uma conta em https://github.com, se ainda não tiver.
2. Novo repositório chamado `financas`, **público** (o plano grátis do Pages exige isso;
   só o código fica visível, os dados continuam protegidos pelo login e pelas regras).
3. **Add file** → **Upload files** → arraste todos os arquivos desta pasta, incluindo a pasta `icons`
   e o `config.js` já preenchido → **Commit changes**.
4. **Settings** → **Pages** → Source: **Deploy from a branch**, branch **main**, pasta **/(root)** → **Save**.
5. Em 1 ou 2 minutos o app fica em `https://SEU-USUARIO.github.io/financas/`.
6. No Firebase, em **Authentication** → **Configurações** → **Domínios autorizados**,
   adicione `SEU-USUARIO.github.io`.

### 6. Colocar o ícone
- **iPhone (Safari):** abra o link → botão Compartilhar → **Adicionar à Tela de Início**.
  Entre com e-mail e senha dentro do app instalado (ele guarda o login separado do Safari).
- **Android (Chrome):** abra o link → menu ⋮ → **Instalar app** (ou Adicionar à tela inicial).
- **Computador (Chrome ou Edge):** abra o link → ícone de instalar na barra de endereço
  (ou menu ⋮ → Transmitir, salvar e compartilhar → Instalar página como app).

## Perfis
- **Família (Matheus e Paloma):** vê e lança para todos, inclusive para o Rhuan.
- **Rhuan:** entra com o login dele e vê só os próprios lançamentos, no painel, nos gráficos,
  na tabela, na projeção e na planilha exportada. Só consegue lançar para ele mesmo.

Quem garante isso são as regras do Firestore (passo 3): o servidor do Google recusa ao Rhuan
qualquer lançamento que não seja dele, mesmo que alguém tente acessar os dados por fora do app.
O `config.js` só faz o app abrir já no formato certo para o perfil.

Para ver como cada perfil fica antes de publicar, use o modo teste: Configurações → Testar perfis.

## Carteira: quem vamos atualizar
O botão de carteira no topo escolhe de quem são os lançamentos feitos naquele aparelho.
O botão "+" e o formulário já abrem com essa pessoa. A escolha fica guardada em cada aparelho.

## Olho: quem entra no painel e nos gráficos
O olho (na carteira ou ao lado do nome em cada coluna) tira a pessoa do painel e de todos
os gráficos, que passam a somar só quem ficou selecionado. Os lançamentos dela continuam
salvos e dá para continuar lançando. A escolha também fica guardada em cada aparelho.

## Resumo por pessoa e tabela de lançamentos
Cada pessoa tem um cartão com o total de entradas, gastos e investimentos do mês e um "+" para
lançar em cada um. Os lançamentos item a item ficam na tabela "Lançamentos do mês", separados
em Entradas, Gastos e Investimentos. Toque numa linha para editar ou excluir.

## Projeção de 6 meses
O botão "Projeção de 6 meses", ao lado do nome do mês, abre uma tabela com os próximos 6 meses:
entradas por categoria, despesas fixas e variáveis por categoria, total de receita, total de
despesa, investimento e sobra. As setas mudam a janela de meses. A opção de estimativa soma
às despesas variáveis a média do que foi gasto nos últimos 3 meses. "Baixar planilha" gera o
arquivo para abrir no Excel.

## Pago e recebido
Cada gasto e cada entrada tem um botão de "ok" na tabela de lançamentos: toque para marcar
como pago ou recebido. Os cartões "Pagamentos" e "Recebimentos", no topo, mostram quanto já
foi pago ou recebido no mês, quanto falta e as maiores contas pendentes. Nos lançamentos de
todo mês, a marcação vale só para o mês aberto.

## Filtros dos gráficos
Toque em "Fixas" ou "Variáveis" no gráfico de despesas fixas e variáveis, ou numa categoria
em "Para onde foram os gastos" e "Gastos por categoria", para filtrar os gráficos e a tabela.
Toque de novo, ou em "Limpar filtro", para voltar.

## Calculadora no valor
O botão de calculadora ao lado do valor abre um teclado com as quatro operações. Dá também para
digitar a conta direto no campo (ex.: `120+35,50` ou `89,90x3`); o Enter calcula e o "Usar"
coloca o resultado no campo.

## Vencimento e previsão de recebimento
Abaixo da descrição fica a data de vencimento (gastos) ou a previsão de recebimento (entradas).
Nos lançamentos de todo mês e nas parcelas vale o dia, repetido nos outros meses. Na tabela e
nos cartões de pagamentos aparece "Vence", e em vermelho "Vencida" ou "Atrasada" quando a data
passou e o lançamento ainda não foi marcado como pago ou recebido.

## Qual cartão
No gasto com cartão de crédito dá para dizer qual é o cartão (um nome por fatura, ex.:
"Nubank Paloma"). O painel mostra a soma do cartão no mês separada por cartão; toque num cartão
para filtrar os gráficos e a tabela. Lançamentos antigos sem o nome aparecem como
"Sem cartão definido" e podem ser editados para receber o nome.

## Em aberto
Na tabela de lançamentos, "Em aberto" mostra só o que falta pagar ou receber, do vencimento
mais próximo para o mais distante. Os cartões "Pagamentos" e "Recebimentos" têm um atalho
para essa lista.

## Já investido
A carteira mostra quanto cada um já tem investido até o fim do mês aberto. O lápis ao lado de
cada nome informa o saldo inicial (quanto já estava investido antes de um mês); dali em diante
cada investimento lançado vai somando. Para atualizar o saldo com rendimentos, edite o saldo
inicial e escolha um mês mais recente.

## Cópia de segurança
Em Configurações, "Baixar cópia de segurança" gera um arquivo com todos os lançamentos do jeito
que estão salvos. Vale guardar uma cópia de tempos em tempos.

## Despesa fixa ou variável
Cada gasto é marcado como fixo ou variável. O que repete todo mês já vem como fixo e o resto
como variável, mas dá para trocar. O gráfico "Despesas fixas e variáveis" mostra quanto
das entradas do mês vai para cada tipo.

## Pessoas
Os nomes ficam no `config.js`. Dá para ter de 1 a 5 pessoas; não troque o `id` de quem
já tem lançamentos.

## Atualizar o app depois
Substitua os arquivos no GitHub. Se mudar o `index.html`, aumente o número em `sw.js`
(`financas-v9` → `financas-v10`) para os aparelhos pegarem a versão nova.

## Arquivos
- `index.html`: o app.
- `config.js`: nomes das pessoas e a ligação com o Firebase (o único arquivo para editar).
- `manifest.json`, `sw.js`, `icons/`: ícone, instalação e funcionamento offline.
- `firestore.rules`: regras de acesso para colar no Firebase (passo 3).
