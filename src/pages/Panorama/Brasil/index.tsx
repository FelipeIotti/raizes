import { useRef } from "react";
import {
  Text,
  Title,
  Container,
  ContainerImage,
  TextContent,
  Image,
  ImageContent,
  Eye,
  SubTitle,
  Box,
  Image2,
  Space,
  LegendData,
} from "./styles";
import grafico1 from "../../../assets/grafico1.png";
import grafico2 from "../../../assets/grafico2.png";
import grafico3 from "../../../assets/grafico3.png";
import divider1 from "../../../assets/divider1.png";

export function Brasil() {
  const brasilRef = useRef(null);
  return (
    <>
      <Space id="brasil" ref={brasilRef} />
      <Container>
        <ContainerImage />
        <Title>Forjados na imigração</Title>
        <TextContent>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Até outubro de 2023, o Brasil já tinha recebido o equivalente a
            70,7% do total de imigrantes registrados em 2022. Se o crescimento
            continuar no mesmo ritmo, o ano pode terminar com um saldo ainda
            maior. Dados do
            <>&nbsp;</>
            <a
              href={
                "https://portaldeimigracao.mj.gov.br/pt/dados/microdados/1733-obmigra/dados/microdados/401205-sismigra"
              }
              target="_blank"
            >
              SISMIGRA
            </a>
            <>&nbsp;</>
            (Sistema de Registro Nacional Migratório) do Ministério de Justiça e
            Segurança Pública mostram que, desde 2019, os aumentos têm sido
            consecutivos.
          </Text>
          <ImageContent>
            <Image src={grafico1} alt="gráfico1" />
            <LegendData>
              Fonte: Sismigra / Ministério da Justiça e Segurança Pública
            </LegendData>
          </ImageContent>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Imigração é mais uma dessas questões humanas, globais e antigas.
            Implica todas as nações do mundo de maneiras diferentes. Devido à
            importância do tema na atual sociedade globalizada, organizações
            governamentais e globais têm procurado compreender melhor a questão.
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            No século XXI, a imigração é um problema complexo e em constante
            transformação. Sendo assim, qualquer política pública que se
            pretenda ser efetiva precisa ser repensada e monitorada
            continuamente.
          </Text>

          <Eye>
            Dos 897.214 hispano-americanos,
            <br />
            412.270 são venezuelanos.
          </Eye>

          <SubTitle>Ponto de partida</SubTitle>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>O continente americano compartilha muitas características
            históricas, sociais e econômicas. Muitas delas foram forjadas a
            partir do mesmo ponto: a colonização. Nosso funcionamento enquanto
            sociedade tem como base a chegada de estrangeiros no território, que
            continuou nos acompanhando durante o processo de desenvolvimento.
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            No caso do Brasil, o cenário já é conhecido: a abolição da
            escravidão no começo do século XX, a necessidade de mão de obra e a
            política de embranquecimento do país resultaram em programas de
            incentivo à imigração de europeus.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>À época, imigrantes não desfrutavam de um conjunto de
            normas voltadas a acolher suas necessidades específicas para atingir
            o status de cidadãos, contavam apenas de viagens subsidiadas pelo
            Estado e a promessa mal cumprida de terras.
          </Text>
          <ImageContent>
            <Image src={grafico2} alt="gráfico2" />
            <LegendData>
              Fonte: Reprodução / Arquivo Público do Estado de São Paulo
            </LegendData>
          </ImageContent>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Foi só mais tarde, no período da redemocratização e com a
            promulgação da Constituição de 1988 –a cidadã–, que as políticas
            para imigrantes e para imigração ganharam o perfil que se conhece
            hoje. Atualmente, uma vasta estrutura normativa atende os
            estrangeiros, de maioria não-branca, que buscam o Brasil como
            residência.
          </Text>

          <SubTitle>Novos fluxos</SubTitle>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Não foi só a etnia dos imigrantes que mudou, mas toda a lógica dos
            fluxos migratórios. Segundo Mayra Coan Lago em
            <>&nbsp;</>
            <a
              href={
                "https://travessia.emnuvens.com.br/travessia/issue/view/106/117"
              }
              target="_blank"
            >
              “Política Migratória Brasileira e Comparada na América do Sul”,
            </a>
            <>&nbsp;</>
            os países sul-americanos deixaram de ser apenas receptores para
            serem também emissores e lugares de passagem. Caracteriza-se, então,
            o fluxo intrarregional, que acontece com pessoas se mudando dentro
            de uma mesma região.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>Lago explica que o início do século XXI na América do Sul
            foi de crescimento econômico, aumento da oferta de emprego e
            melhoria das condições sociais e políticas. Em paralelo, os
            atentados terroristas de 2001 nos Estados Unidos e a crise econômica
            internacional de 2008 estimularam medidas mais restritivas à
            imigração em países da Europa e nos Estados Unidos.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Essa movimentação deslocou os fluxos migratórios para outras
            regiões, explica a autora. A América do Sul, em especial o Brasil,
            se torna mais atraente para migrantes voluntários e não voluntários
            buscarem melhores condições de vida. Nessa toada, o Mercosul e
            outros acordos multilaterais colaboraram para uma integração
            regional.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>O relatório da
            <>&nbsp;</>
            <a
              href={
                "https://brazil.iom.int/pt-br/news/relatorio-mundial-sobre-migracao-da-oim-mostra-aumento-do-deslocamento-global-apesar-dos-limites-de-mobilidade-da-covid-19"
              }
              target="_blank"
            >
              ONU Migration de 2020
            </a>
            <>&nbsp;</>
            compara a presença de estrangeiros no território sul-americano.
          </Text>

          <Box>
            <Text>
              • 1970: 76% dos imigrantes na América do Sul eram de fora da
              região, enquanto 24% eram da região.
              <br />
              • 2010: 37% eram de fora, enquanto 63% eram da região.
              <br />• 2020: 20% eram de fora, enquanto 80% eram da região.
            </Text>
          </Box>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Segundo o mesmo relatório, no Brasil de 2019, 44,4% do total de
            imigrantes recebidos pelo Brasil eram da América do Sul.
            <>&nbsp;</>
            <a
              href={
                "http://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=4AA173CBF93ED10870F55BB7B87E7DB7.buscatextual_0"
              }
              target="_blank"
            >
              María del Carmen Villarreal Villamar
            </a>
            , estudiosa dos fluxos migratórios da região, explica que as
            principais motivações para o fato são o conflito armado colombiano,
            a expansão do crime organizado, a generalização da violência, a
            extensão do desenvolvimento extrativista e o deterioramento da
            situação política e econômica na Venezuela.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Dados do SISMIGRA comprovam a intensificação do fenômeno. Das 10
            nacionalidades que o Brasil mais abriga hoje, 5 eram de pessoas de
            nações hispano-americanas.
          </Text>

          <ImageContent>
            <Image src={grafico3} alt="gráfico3" />
            <LegendData>
              Fonte: Sismigra / Ministério da Justiça e Segurança Pública
            </LegendData>
          </ImageContent>
        </TextContent>
        <Image2 src={divider1} alt="gráfico3" />
      </Container>
    </>
  );
}
