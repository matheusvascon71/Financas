// =====================================================================
//  CONFIGURAÇÃO DO APP — é o único arquivo que você precisa editar.
// =====================================================================
window.APP_CONFIG = {

  // Pessoas que aparecem nas colunas (de 1 a 5).
  // A ordem define a cor: 1º azul, 2º laranja, 3º framboesa, 4º verde-água, 5º oliva.
  // Não troque o "id" de quem já tem lançamentos: é por ele que os dados são ligados à pessoa.
  pessoas: [
    { id: "matheus", nome: "Matheus" },
    { id: "paloma",  nome: "Paloma"  },
    { id: "rhuan",   nome: "Rhuan"   }
  ],

  // Perfis de acesso (valem quando o Firebase estiver ligado).
  // Quem está nesta lista vê e lança SÓ os próprios lançamentos: "UID da conta": "id da pessoa".
  // Quem não está (Matheus e Paloma) vê e lança para todos.
  // O UID fica no Firebase, em Authentication > Usuários (coluna "UID do usuário").
  // Ele precisa ser o mesmo colocado no arquivo de regras (firestore.rules).
  somenteProprio: {
    "IzEDOP7KELPoikPGZLqCU1mikr82": "rhuan"
  },

  // Cole aqui os valores do "firebaseConfig" (passo 4 do LEIA-ME).
  // Enquanto apiKey estiver vazio, o app roda em MODO TESTE:
  // os dados ficam só no navegador onde você abriu o arquivo.
  firebase: {
    apiKey: "AIzaSyDcyceY_3DOG4W2Pcj1wX8_U3amfWlwIMI",
    authDomain: "financas-familia-2b72c.firebaseapp.com",
    projectId: "financas-familia-2b72c",
    storageBucket: "financas-familia-2b72c.firebasestorage.app",
    messagingSenderId: "744476644550",
    appId: "1:744476644550:web:a0c6e6608dee975086b3c7"
  }
};
