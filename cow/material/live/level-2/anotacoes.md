* ESTRUTURA 

header - cabeçalho da aplicação (apoio)
footer - rodapé da aplicação (apoio)
main - onde fica a aplicação

[ARTICLE] - utilizado como bloco de conteúdo
O article pode ser utilizado para cada comentário de um post ao invés de utilizar li>p
ou conteúdo textual que sejam blocos de texto; Ex: 	
	<article>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
	</article>


[ASIDE] - utilizada quando tem relação com o article. 
Ex: Em um post no WP as tags, a hora, data do post e autor seriam aside;

[SECTION] - separa sessão com contextos diferentes;

[NAV] - menu de navegação do site. auxilia no uso do deficiente visual

Ex.: 
	<nav class="nav">
		<ul>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
		</ul>
	</nav>


====================================================================================

* FORMULÁRIO

Sempre colocar label nos inputs

Atributo autofocus utilizado para dar foco em determinado input, bom para melhorar a experiência do usuário;

Atributo required utilizado para tornar determinado campo obrigatório;

Input type="number" utilizado para números e você pode determinar o valor mínimo e máximo do campo utilizando min="value" max="value";

pattern - cria um regex e utiliza para validar junto com o maxlength pode restringir a quantidade de caracteres

====================================================================================


* LOAD

meter - utilizado para definir métricas habilitando:
	value="valor padrão"
	min="valor mínimo"
	max="valor máximo"
	low="o que eu considero valor baixo"
	high="o que eu considero valor alto"
	optimum="valor considerado"


====================================================================================

* AUDIO

O exemplo abaixo esconde os 
<audio autoplay>
	<source src="local_do_video"></source>
</audio>



Hierarquia de H'S são utilizadas no HTML5 por bloco



		(header>(h1.logo>a[title="Minha logo" href="#"]{Minha Logo})+nav.nav>ul>li*3>a[href="#"]{Link $})+(main>(section>article>(h1{Meu título})>p{Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, molestiae, quia qui quasi ratione incidunt facere atque aut quae ullam nam blanditiis laboriosam doloremque voluptatum mollitia nostrum nihil fuga tempora.}+video[controls="controls"]>source[src="../../../common/movie.mp4" type="video/mp4"])+section>aside>(h1{Titulo})+(p{Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ex.})+form>(input[type="email" autofocus="autofocus"])+(input[type="url"])+(textarea)+(input[type="submit" value="submit"]))+footer