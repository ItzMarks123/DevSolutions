function selectProduct(productName) {
    document.getElementById('product').value = productName;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value.toLowerCase(); // Converte para minúscula para busca
    const message = document.getElementById('message').value;

    // Lista de palavras-chave sensíveis
    const keywordsSuspeitas = ['ddos', 'stresser', 'ataque', 'hack', 'produção de ddos', 'stress test ilegal'];

    // Verifica se o produto contém alguma palavra-chave suspeita
    const isSuspeito = keywordsSuspeitas.some(keyword => product.includes(keyword));

    if (isSuspeito) {
        // Envia e-mail para pedidos suspeitos
        const emailSubject = `🚨 Pedido Suspeito: ${product}`;
        const emailBody = `Olá! Um pedido potencialmente problemático foi detectado:\n\nNome: ${name}\nE-mail: ${email}\nProduto/Serviço: ${product}\nMensagem: ${message}\n\nRevise antes de prosseguir. Pode ser relacionado a atividades ilegais como DDoS.`;
        const mailtoUrl = `mailto:devsolutionsvendas@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`; // Substitua pelo seu e-mail

        window.open(mailtoUrl, '_blank');
        alert('🚨 Seu pedido está em análise. Entraremos em contato em breve!');
    } else {
        // Mensagem personalizada para WhatsApp
        const whatsappMessage = `💾 *Bem-vindo ao DevSolutions | Vendas!* 💾\n\n` +
                               `*Novo Pedido Recebido* 🚀\n` +
                               `*Nome:* ${name}\n` +
                               `*E-mail:* _${email}_\n` +
                               `*Produto/Serviço:* ${product} 📟\n` +
                               `*Mensagem:* ${message}\n\n` +
                               `🔗 *Logo*: https://imgur.com/a/nRKyQah\n` + // Substitua pelo link da imagem
                               `Aguardo sua confirmação para prosseguir! 😎`;

        const whatsappUrl = `https://wa.me/558391290349?text=${encodeURIComponent(whatsappMessage)}`; // Substitua pelo seu número de WhatsApp

        window.open(whatsappUrl, '_blank');
        alert('📲 Redirecionando para o WhatsApp com sua mensagem personalizada!');
    }
});