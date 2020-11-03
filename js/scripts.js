/*
***********************************************************************************************************************************
*************************************************VALIDADORES DE CAMPO**************************************************************
***********************************************************************************************************************************
*/
//VALIDADORES DE CAMPOS
function validar()
{
	var nome = form_contato.nome.value;
	var email = form_contato.email.value;
	var assunto = form_contato.assunto.value;
	var mensagem = form_contato.mensagem.value;
	
	if (nome == "")
		{
			alert('Preencha o campo Nome!!!');
			form_contato.nome.focus();
			return false;
		}
	if (email == "" || email.indexOf('@')== -1 || email.search(" ")!= -1) //indexOf - Verifica se existe o caractere desacrito no conteúdo do campo
		{
			alert('Campo E-mail vazio ou conteúdo inválido!!!');
			form_contato.email.focus();
			return false;
		}
	if (assunto == "")
		{
			alert('Preencha o campo Assunto!!!');
			form_contato.assunto.focus();
			return false;
		}
	if (mensagem == "")
		{
			alert('Preencha o campo Assunto!!!');
			form_contato.mensagem.focus();
			return false;
		}
		
}

function validacaoEmail(email) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
 
	if ((usuario.length >=1) &&
    	(dominio.length >=3) && 
    	(usuario.search("@")==-1) && 
   		(dominio.search("@")==-1) &&
    	(usuario.search(" ")==-1) && 
    	(dominio.search(" ")==-1) &&
    	(dominio.search(".")!=-1) &&      
    	(dominio.indexOf(".") >=1)&& 
    	(dominio.lastIndexOf(".") < dominio.length - 1)) 
		{
			document.getElementById("msgemail").innerHTML="E-mail válido";
			alert("E-mail valido");
		}
		
	else
		{
			document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
			alert("E-mail invalido");
		}
}
// Confirmadores de envio de formulários

function confirma_envio()
{
	
				
				history.go(-1);
				window.alert('Mensagem enviada com sucesso!!!');
				
				
				
}

