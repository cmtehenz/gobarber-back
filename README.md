# Recuperção de senha

**RF**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar em ambiente de desenvolvimento;
- Utilizar Amazon SE5 para envios em produção;
- O envio de e-mails deve acontecer e, segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu perfil nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuario deve pode listar seus agendamentos de dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- O prestador deve ver as notificacoes nao lidas;

**RNF**

- Os agendamentos do prestador do dia deve ser carregado em cache;
- As notificacoes do prestador devem ser armazedas no MongoDB;
- As notificacoes do prestador deve ser enviadas em tempo-real utilizando socket.io;

**RN**

- A notificacao deve ter um status de lida ou nao lida;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador;
- O usuário deve poder listar horários disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;


**RNF**

- Listagem de prestadores deve ser armazenadas em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h;
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar um horario q ja passou;
- O usuario nao pode agendar consigo mesmo;
