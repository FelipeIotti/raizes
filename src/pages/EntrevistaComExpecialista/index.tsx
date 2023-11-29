import { useRef } from "react";
import {
  Box,
  Container,
  Eye,
  Image,
  Image2,
  Image3,
  Image4,
  ImageContent,
  LegendData,
  LegendDataPizza,
  PizzaImagesContainer,
  Question,
  SubTitle,
  Text,
  TextContent,
  TextN,
  Title,
  TitleUnderline,
} from "./styles";

import dividerHispano from "../../assets/dividerHispano.png";
import dividerAzulPreto from "../../assets/dividerazulpreto.png";
import graficoPizza from "../../assets/grafico5.svg";
import graficoPizza1 from "../../assets/grafico6.svg";
import tabela from "../../assets/tabela.png";

export function EntrevistaComExpecialista() {
  const entrevistaComExpecialistaRef = useRef(null);
  return (
    <Container
      id="entrevistaComExpecialista"
      ref={entrevistaComExpecialistaRef}
    >
      <Image2 src={dividerHispano} alt="dividerHispano" />
      <TextContent>
        <Title>
          Especialista aponta omissão do poder público em relação a políticas
          para imigrantes e refugiados no Brasil
        </Title>
        <TitleUnderline>
          Para o cientista social, a legislação é positivamente robusta, mas não
          é efetiva
        </TitleUnderline>
        <Text>
          José Geraldo Poker, professor do departamento de Relações
          Internacionais da Unesp Marília, não se surpreende ao ver que houve um
          aumento de % na entrada de imigrantes hispano-americanos no Estado de
          São Paulo de 2022 para 2023. Os dados do SISMIGRA, mostram que os
          venezuelanos são os que mais procuram o Brasil.
        </Text>
        <Text>
          <br />
          Para o sociólogo, os fluxos migratórios hispânicos na região sul do
          continente americano carecem de uma teoria geral que identifique
          padrões para as causas. No entanto, Poker identifica a busca por
          melhores condições de vida e as oportunidades de trabalho que São
          Paulo oferece como os grandes atrativos para a região. Serviços
          públicos de melhor qualidade e oportunidades de emprego fazem parte do
          saldo positivo no cálculo estratégico de imigrantes e refugiados na
          escolha do destino.
        </Text>
        <Text>
          <br />
          Segundo o SISMIGRA o Estado de São Paulo registra 36,9% de todos os
          imigrantes que entraram no país seguindo a lógica do professor. Apesar
          das oportunidades de trabalho, Poker enfatiza que a legislação não é
          efetivada por todos os níveis do poder público. A Polícia Federal
          (PF), órgão responsável por regulamentar o registro dessa população,
          não atua no acolhimento e inclusão.
        </Text>
        <Text>
          <br />
          Para ele, os poderes executivos municipais e estaduais não têm se
          comprometido com as necessidades dos imigrantes, o que causa um
          desequilíbrio de funções. Em vez disso, associações da sociedade civil
          e organizações não-governamentais atuam onde o Estado não chega, mas
          muitas vezes sem fiscalização ou treinamento e com agendas
          particulares.
        </Text>
        <Text>
          <br />
          Desde 2016 o professor coordena o Núcleo de Assessoria a Imigrantes e
          Refugiados, um projeto de extensão desenvolvido pelo PETRI-Unesp
          (Programa de Educação Tutorial de Relações Internacionais), do campus
          de Marília. O projeto oferece assessoria a imigrantes e refugiados
          para facilitar a adaptação cultural e inclusão na sociedade local.
        </Text>
        <Text>
          <br />O professor acredita que a alfabetização política sobre os
          direitos fundamentais dos cidadãos e imigrantes é o primeiro passo
          para que essa população tenha acesso a uma vida digna no Brasil,
          apesar da omissão do poder público.
        </Text>
        <Text>
          <br />A partir do projeto, o pesquisador também desenvolveu uma linha
          de pesquisa em parceria com pesquisadores da UNILA (Universidade
          Federal da Integração Latino-Americana), da UFGD (Universidade Federal
          de Grande Dourados), da UNIOESTE (Universidade Estadual do Oeste do
          Paraná) e da UNISAGRADO (Centro Universitário Sagrado Coração), para
          coletar dados e analisar como os imigrantes e refugiados usufruem de
          seus direitos fundamentais. O objetivo é produzir conhecimento para o
          aperfeiçoamento de políticas públicas.
        </Text>
        <ImageContent>
          <Image src={dividerAzulPreto} alt="divider" />
        </ImageContent>
        <SubTitle>Entrevista na íntegra</SubTitle>
        <Question>
          <br />
          Os fluxos migratórios intrarregionais na América do Sul possuem as
          mesmas características que os da América-Hispana? Posso fazer essa
          generalização?
        </Question>
        <Text>
          <br />
          Não temos uma teoria geral a respeito dos fluxos migratórios
          hispânicos para o Brasil. Varia muito de cada região e das causas que
          os provocam.
        </Text>
        <Text>
          <br />
          No caso da Venezuela, por exemplo, o fluxo é recente, não há uma
          história longa de migração de venezuelanos para o Brasil. Diferente do
          caso de imigrações europeias para o Brasil –no caso de espanhóis,
          especificamente, que são de longa data e tem outros fatores.
        </Text>
        <Text>
          <br />
          Por isso precisamos regionalizar para entender o que de fato ocorre e
          observar os fatores. Fatores, como por exemplo guerras, são diferentes
          de desastres climáticos. Embora possamos ter um fundamento geral, que
          seria a busca por melhores condições de vida, ele ainda varia por
          conta da subjetividade de cada imigrante.
        </Text>
        <Text>
          <br />
          Eu entendo que a imigração é um fenômeno extremamente complexo. Às
          vezes em meio a uma situação muito caótica a pessoa pode decidir
          permanecer [na região de origem], como seria o caso de Gaza e da
          Ucrânia hoje em dia. Ou às vezes, em situações não tão desesperadoras,
          vamos dizer, as pessoas decidem sair.
        </Text>
        <ImageContent>
          <Image4 src={tabela} alt="divider" />
          <LegendData>
            Fonte: Sismigra / Ministério da Justiça e Segurança Pública
          </LegendData>
        </ImageContent>
        <Question>
          <br />
          Como o Brasil se compara ao resto do continente em relação ao acesso
          aos direitos fundamentais dos imigrantes? Isso influencia a escolha do
          país como destino?
        </Question>
        <Text>
          <br />
          Nossa legislação, nosso poder público e nossos direitos fundamentais
          não seriam necessariamente um fator de atração, justamente porque há
          dificuldades. O imigrante internacional que vem para o Brasil é
          recebido pela PF (Polícia Federal) e a partir desse momento está
          sujeito à própria sorte.
        </Text>
        <Text>
          <br />
          Ele precisa procurar um lugar onde há políticas públicas de
          acolhimento e inclusão. E não necessariamente ele tem essa informação,
          porque a PF não presta esse serviço, ela só dá um número a ele. O
          fator [que influencia a vinda para o Brasil] seria oportunidades de
          trabalho.
        </Text>
        <Text>
          <br />
          Aqui no Brasil, temos uma ótima legislação, mas ela não é implementada
          pelos diversos níveis do poder público. O próprio imigrante não se
          entende como destinatário dessa legislação. O imigrante, então, fica
          condicionado ao envolvimento de organizações da sociedade civil, como
          as ONGs, entidades filantrópicas e religiosas, clubes de serviços,
          pastorais, etc. Eles vão substituir - e a palavra é essa mesmo - o
          trabalho de acolhimento de imigrantes e refugiados, por conta da
          omissão do poder público.
        </Text>
        <Text>
          <br />É muito complicado que as organizações, empresas e associações
          ofereçam serviços públicos. Isso pode provocar uma distorção, porque
          essas organizações podem ter interesses e compromissos que não estão
          vinculadas ao interesse público.
        </Text>
        <Text>
          <br />O segundo fator que fica condicionado a vinda do imigrante para
          o Brasil é a vontade e disponibilidade política do poder público
          local. Se ele se dispuser a aplicar a lei e efetivar a legislação que
          nós temos, aí temos um trabalho melhor de acolhimento. Mas o fato é
          esse: políticas públicas precisam ser exercidas pelo poder público.
        </Text>
        <Question>
          <br />
          Mesmo com a crise, essas oportunidades de trabalho ainda perduram no
          Brasil em relação à região?
        </Question>
        <Text>
          <br />
          Se compararmos as economias da América do Sul, o Brasil é o lugar que
          tem a economia mais estável. Temos uma taxa de inflação e uma taxa de
          desemprego relativamente pequenas comparadas aos nossos vizinhos. Nós
          também temos uma economia relativamente mais organizada.
        </Text>
        <Text>
          <br />
          Nesse sentido, a gente pode considerar que o Brasil atrai mais
          imigrantes em função dessas oportunidades que a nossa economia gera,
          seja no setor formal ou no setor informal.
        </Text>
        <Text>
          <br />
          Grande parte de quem vem pra cá atua no setor informal. Isso é
          positivo de um lado e negativo de outro. No setor informal eles estão
          sujeitos a uma exploração que chega a ser cruel. Aqui na região de
          Marília, na cidade de Cafelândia, no ano passado, 11 famílias
          venezuelanas
          <>&nbsp;</>
          <a
            href={
              "https://g1.globo.com/sp/bauru-marilia/noticia/2022/06/27/venezuelanos-sao-resgatados-de-trabalho-analogo-ao-de-escravo-no-interior-de-sp.ghtml"
            }
            target="_blank"
          >
            foram resgatadas de trabalho análogo á escravidão.
          </a>
          <>&nbsp;</>
        </Text>
        <Question>
          <br />O Estado de São Paulo concentra 36% de todos os imigrantes que
          tem hoje no Brasil, sendo o Estado com a maior porcentagem de
          imigrantes. São Paulo atraiu imigrantes na época do café e da
          consequente industrialização, mas por que continua tendo esse
          magnetismo?
        </Question>
        <Text>
          <br />
          Pelo mesmo fator que o Brasil: oportunidades de trabalho, seja no caso
          de uma migração forçada ou não. Embora haja oportunidades em outros
          estados, como no Mato Grosso, no setor agrícola, no caso específico do
          estado de São Paulo, ainda temos várias empresas que contratam com
          documentação, direitos formais garantidos, direitos trabalhistas,
          previdenciários.
        </Text>
        <Text>
          <br />
          Além de que a gente tem uma grande população que poderia fornecer
          atrativos quanto a iniciativas vinculadas ao empreendedorismo dos
          imigrantes. A gente tem aqui no Estado de São Paulo, em função dessa
          grande população, um mercado consumidor que pode ser viável para
          determinadas iniciativas vinculadas a prestação de serviços.
        </Text>
        <Text>
          <br />
          No caso dos imigrantes que têm profissões nesse setor, como
          cabeleireiro, manicure, cozinheiros, enfim, que podem oferecer
          produtos dentro do setor de serviços e trabalhar por conta própria
          nesse sentido, eu vejo ainda essas vantagens em São Paulo nesses
          aspectos.
        </Text>
        <Text>
          <br />
          Aqui em SP também temos serviços públicos de melhor qualidade.
          Sistemas de saúde e de educação funcionam melhor e isso pode ser
          também um fator conjugado dentro do raciocínio que você apresentou com
          relação à atratividade.
        </Text>
        <PizzaImagesContainer>
          <ImageContent>
            <Image3 src={graficoPizza} alt="graficoPizza1" />
            <LegendDataPizza>
              Fonte: Sismigra / Ministério da Justiça e Segurança Pública
            </LegendDataPizza>
          </ImageContent>
          <ImageContent>
            <Image3 src={graficoPizza1} alt="graficoPizza2" />
            <LegendDataPizza>
              Fonte: Sismigra / Ministério da Justiça e Segurança Pública
            </LegendDataPizza>
          </ImageContent>
        </PizzaImagesContainer>
        <Question>
          <br />O que está igual e o que está diferente entre as ondas
          migratórias de hoje e as do passado para o Estado de São Paulo?
        </Question>
        <Text>
          <br />
          Hoje temos uma cesta de direitos que pode acompanhar oportunidades de
          trabalho e de geração de renda. Mas não podemos esquecer que o poder
          público continua igual em termos de compromisso com a população. Uma
          coisa é termos os direitos formais positivados, outra situação é
          tê-los efetivados. Há uma distância em relação a isso hoje em dia.
        </Text>
        <Text>
          <br />
          Nas primeiras ondas migratórias não existiam, ou eram muito poucos
          direitos atribuídos aos imigrantes. Não havia compromisso do poder
          público em tutelar direitos. Ele continua não se importando muito com
          pessoas frágeis, mas os direitos estão positivados. Se as pessoas
          lutarem por eles é possível que elas os acessem.
        </Text>
        <Text>
          <br />
          Esse é um ponto importante do trabalho de acolhimento, que é divulgar
          as informações de acesso aos direitos existentes. Quando falo de
          acolhimento e inclusão, falo inclusive nesse empoderamento político,
          que é eles saberem quais são os direitos deles e como acessar o poder
          público, às vezes até judicialmente, via Ministério Público. Temos uma
          boa estrutura para acolher, o problema é fazer com que ela inclua o
          poder público para fazer a sua efetivação em todo o território.
        </Text>
        <Question>
          <br />
          Como você caracterizaria as pessoas imigrantes que chegam no interior
          paulista?
        </Question>
        <Text>
          <br />
          Nosso dado mais recente gira em torno de 400 imigrantes que recebemos
          em Marília. São de origem variada. Recebemos chineses, afegãos,
          venezuelanos, bolivianos, sírios, egípcios, entre outros.
        </Text>
        <Text>
          <br />
          As características são bem diversas. Quando consideramos a América do
          Sul, as pessoas são muito pobres e precisam de muita assistência do
          poder público para conseguir permanecer ou mesmo sair de Marília
          quando estão em trânsito.
        </Text>
        <Text>
          <br />
          Não é o caso dos chineses, sírios, afegãos e de outros imigrantes
          internacionais que têm como objetivo uma fixação na cidade em função
          de uma escolha por outros fatores. Eles já vêm para cá com a
          possibilidade de exercer a profissão para a qual se formaram nos
          lugares de origem. É isso que diferencia a situação dos imigrantes
          aqui em Marília.
        </Text>

        <Question>
          <br />
          Como elas são recebidas no interior paulista, no caso, Marília?
        </Question>
        <Text>
          <br />
          Temos tido mais trabalho justamente no acolhimento das pessoas mais
          pobres, que não têm mesmo para onde ir. No caso de venezuelanos,
          sobretudo os indígenas, eles ficam nas ruas pedindo nos semáforos até
          serem acolhidos pelo poder público e encaminhados para alguns lugares
          de alojamento de andarilhos, mas isso tudo ainda é muito deficiente em
          Marília, como no resto do Brasil.
        </Text>

        <Text>
          <br />
          Como eles não têm como pagar por um lugar para ficar, acabam sendo
          submetidos a serviços públicos que são oferecidos para andarilhos e
          isso é uma distorção muito grande, porque imigrantes não são
          necessariamente andarilhos. Não há uma estrutura para acolher
          famílias, por exemplo, então elas acabam sendo separadas quando
          recorrem a esse serviço. É uma especificidade que o poder público não
          destrincha.
        </Text>
        <Question>
          <br />
          Quais são as principais dificuldades que elas encontram, dentro da
          dificuldade de acessar o poder público?
        </Question>
        <Text>
          <br />A principal e primeira barreira é a linguística. Quando a
          superamos, podemos oferecer condições melhores de inclusão à medida
          que começamos uma alfabetização jurídica e política. É quando levamos
          conhecimento para as pessoas sobre garantias e direitos individuais e
          de onde eles podem ser acessados. Mas tudo começa com o idioma, não
          tem jeito.
        </Text>
        <Text>
          <br />
          Simultaneamente, uma condição digna, como um lugar para morar, um
          alojamento, ou abrigo também representam grande dificuldade. As
          pessoas não podem ficar em situação de rua enquanto aprendem a falar
          português.
        </Text>
        <Eye>
          "Quando falo de acolhimento e inclusão, falo inclusive nesse
          empoderamento político, que é eles saberem quais são os direitos deles
          e como acessar o poder público, às vezes até judicialmente, via
          Ministério Público. Temos uma boa estrutura para acolher, o problema é
          fazer com que ela inclua o poder público para fazer a sua efetivação
          em todo o território."
        </Eye>
        <Question>
          <br />
          Qual a perspectiva para o futuro do acolhimento dos imigrantes no
          Brasil?
        </Question>
        <Text>
          <br />
          Caso haja expansão da imigração e em grau acentuado, como observamos
          hoje, vamos precisar que o poder público comece a atuar para efetivar
          a nossa legislação.
        </Text>
        <Text>
          <br />O imigrante precisa ser recebido como pessoa, como ser digno. O
          que é muito complicado porque nem para residentes isso é pleno, varia
          muito de lugar para lugar. Mas é algo que precisa melhorar.
        </Text>
        <Box>
          <TextN>Entrevistado | José Geraldo Poker</TextN>
          <Text>
            <br />
            <br />
            Doutor em Sociologia pela USP (Universidade de São Paulo) e
            professor da Unesp (Universidade Estadual Paulista Júlio de Mesquita
            Filho), campus de Marília com experiência na área de Ciências
            Sociais, Direito e Relações Internacionais.
          </Text>
          <Text>
            <br />
            <br />
            Atualmente desenvolve projeto de pesquisa que analisa as formas de
            acesso e as eventuais barreiras encontradas por imigrantes e
            refugiados para usufruir dos direitos fundamentais no Brasil. Desde
            2016 coordena o Núcleo de Assessoria a Imigrantes e Refugiados,
            projeto de extensão da Unesp Marília, que emprega os conhecimentos
            produzidos nas áreas de Relações Internacionais e Ciências Sociais
            para oferecer assessoria a imigrantes e refugiados, de maneira a
            facilitar a adaptação cultural e a inclusão na sociedade local.
          </Text>
        </Box>
      </TextContent>
    </Container>
  );
}
