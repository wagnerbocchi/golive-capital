import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa o Resend com a chave da API a partir das variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extrai os dados do corpo da requisição
    const body = await request.json();
    const { nome, empresa, email, telefone, assunto, mensagem } = body;

    // Validação básica para garantir que os campos obrigatórios estão presentes
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    // Envia o e-mail usando o Resend
    const { data, error } = await resend.emails.send({
      from: 'GoLive Capital <contato@seu-dominio-verificado.com>', // Use um e-mail do seu domínio verificado
      to: ['contato@golive.capital'], // O e-mail de destino
      subject: `Nova mensagem de contato: ${assunto}`,
      replyTo: email, // Define o e-mail do remetente como o endereço para resposta
      html: `
        <h1>Nova Mensagem do Formulário de Contato</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa || 'Não informado'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <hr>
        <h2>Mensagem:</h2>
        <p>${mensagem}</p>
      `,
    });

    // Se houver um erro no envio, retorna o erro
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Se o e-mail for enviado com sucesso, retorna os dados
    return NextResponse.json(data);
  } catch (error) {
    // Captura erros inesperados
    return NextResponse.json({ error: 'Ocorreu um erro ao processar a solicitação' }, { status: 500 });
  }
}