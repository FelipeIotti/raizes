import { useRef } from "react";
import {
  Container,
  ContentImageText,
  Image,
  ImageContent,
  ImageLeft,
  ImageRight,
  Space,
  SubTitle,
  Text,
  TextContent,
  Title,
} from "./styles";

import grafico4 from "../../../assets/grafico4.svg";
import esquerda from "../../../assets/esquerda.png";
import direita from "../../../assets/direita.png";

export function Bauru() {
  const bauruRef = useRef(null);
  return (
    <>
      <Space id="bauru" ref={bauruRef} />

      <Container>
        <Title>Panorama Geral - Bauru</Title>
        <TextContent>
          <SubTitle>Marcha para o oeste</SubTitle>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>O auge do transporte ferroviário e o fim da escravidão,
            mão de obra predominate até então nas grandes fazendas cafeeiras do
            centro-oeste paulista, atrairam parte da onda de imigrantes que
            chegaram ao Brasil no final do século XIX e começo do XX. Os
            recém-chegados à região eram majoritariamente portugueses, italianos
            e espanhóis, havendo também presença de alemães, austríacos e
            japoneses, segundo o Arquivo Público do Estado de São Paulo.
          </Text>

          <Text>
            <br></br>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>O<>&nbsp;</>
            <a
              href={
                "http://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=4AA173CBF93ED10870F55BB7B87E7DB7.buscatextual_0"
              }
            >
              município de Bauru
            </a>
            <>&nbsp;</>
            tem 127 anos. Antes um povoado do município Espírito Santo da
            Fortaleza, hoje extinto, a cidade foi cuidadosamente arquitetada
            para se tornar referência na região noroeste do interior do Estado
            de São Paulo. Em 1905, Bauru foi o ponto de partida para a Estrada
            de Ferro Noroeste do Brasil, linha férrea que ligava a região à
            cidade fronteiriça de Corumbá, no Mato Grosso do Sul.{" "}
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Com o aumento nas migrações (internas), principalmente de
            nordestinos a caminho da região Sudeste, o declínio da imigração
            (externa) a partir de 1930 e as políticas de interiorização do
            governo Getúlio Vargas, Bauru se consolidou como um polo regional.
            Em 2022, era a cidade mais populosa do Centro-Oeste e a 18ª maior em
            população entre os municípios de São Paulo, segundo o último Censo.
          </Text>

          <ImageContent>
            <Image src={grafico4} alt="gráfico4" />
          </ImageContent>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Além de um polo comercial, a cidade se tornou referência na
            educação, com 39 instituições de ensino superior até 2019, e na área
            da saúde, com o Hospital Estadual e o Hospital de Reabilitação de
            Anomalias Craniofaciais – o Centrinho– ligado à Universidade de São
            Paulo (USP), pioneiro na pesquisa e tratamento de doenças, prestando
            atendimento a mais de 100 mil pessoas desde a sua criação.
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>A alta qualidade da área da saúde atrai imigrantes à
            procura de tratamentos especializados nesses centros médicos.
            Mariana e Fernanda*, ambas colombianas, visitam Bauru a cada 2 meses
            e ficam uma semana. Ambas são dentistas e estão matriculadas no
            Centro de Pós-graduação em Odontologia (CPO).
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Dos tipos de vistos expedidos aos 2.196 imigrantes que ingressaram
            na cidade de Bauru nos últimos 5 anos, 96,31% deles são temporários,
            enquanto os vistos residentes e provisórios não chegam a 4%. Os 10
            países com o maior número de imigrantes até outubro de 2023 são
            Equador, Peru, Colômbia, Rep. Dominicana, Venezuela, Bolívia,
            Angola, Chile, EUA e Espanha.
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Por fazerem parte do Mercosul, oito países hispano-americanos têm
            acesso a programas de Mobilidade Acadêmica entre países integrantes
            do bloco. A parceria possibilita a isenção de vistos para estudantes
            que desejam fazer graduação ou pós-graduação em outros
            Estados-membros.
          </Text>

          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Daniel Sebastian Flores Trujillo chegou a Bauru com essa facilidade.
            Natural de Quito, Equador, ele era um estudante de jornalismo quando
            pisou pela primeira vez, em 2019, no campus da Unesp (Universidade
            Estadual Júlio de Mesquita Filho). Naquele ano entrou em um programa
            de intercâmbio promovido pela UDLA (Universidad de Las Américas).
            Encantado com a cultura brasileira de futebol, “Centu”, como foi
            apelidado nos corredores da faculdade, quis dar sequência aos seus
            estudos e começou um mestrado em Mídia e Tecnologia, também na
            universidade estadual, em 2021.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Durante a pandemia de Covid-19, Daniel retornou ao país de origem e
            seguiu com a formação à distância até 2022, quando retornou a Bauru
            como residente. Além dele, outros imigrantes fizeram caminhos
            parecidos. Dados da Polícia Federal mostram que em agosto de 2021
            havia 332 estrangeiros morando no município, já no fim de 2022 eram
            2618 – um salto de 700%.
          </Text>
          <Text>
            <br />
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            <>&nbsp;</>
            Os dados fornecidos pela sede da Polícia Federal em Bauru são os
            mais precisos quanto ao fluxo migratório que na cidade. O dado
            citado acima provém da última atualização, do final de 2022, de
            indicadores fornecidos pela unidade local da PF. A reportagem
            procurou obter dados mais atualizados da PF, mas não teve acesso aos
            dados até a publicação.
          </Text>
          <ContentImageText>
            <ImageLeft src={esquerda} alt="esquerda" />
            <div>
              <SubTitle>Interiorização moderna da imigração</SubTitle>

              <Text>
                <br />
                <br />
                Em comparação, a cidade de São Paulo, historicamente um local
                que recebe um grande número de imigrantes, também apresentou um
                aumento na chegada de estrangeiros durante a pandemia, mas
                proporcionalmente menor à marca registrada em Bauru: 30%,
                segundo dados do CRAI (Centro de Referência Ao Imigrante).
              </Text>

              <Text>
                <br />
                <br />A movimentação de grupos de imigrantes para fora dos
                grandes centros urbanos foi algo notado no artigo “Bolivianos em
                São Paulo: territórios e alteridade”, publicado na Revista
                Plura, da Universidade de São Paulo (USP) entrevistaram
                bolivianos que moravam no Brás e no Grajaú e constataram que
                algumas famílias saíram da região central de São Paulo por
                fatores como a violência e a estigmatização ao que eram
                sujeitados no Brás.
              </Text>
              <Text>
                <br />
                <br />
                Ainda em relação à parcela de imigrantes residentes que se mudam
                para o interior, o professor José Geraldo Poker, do departamento
                de Sociologia e Antropologia da Unesp de Marília, ressalta que a
                interiorização dessa população também apresenta desafios quanto
                à permanência deles nas cidades. Ele sinaliza que municípios não
                têm estruturas adequadas para receber famílias a longo prazo,
                muitas delas em situação de vulnerabilidade.
              </Text>
              <Text>
                <br />
                <br />
                “Como eles não têm como pagar por um lugar para ficar, acabam
                sendo submetidos a serviços públicos que são oferecidos para
                andarilhos e isso é uma distorção muito grande, porque
                imigrantes não são necessariamente andarilhos. Não há uma
                estrutura para acolher famílias, por exemplo, então elas acabam
                sendo separadas quando recorrem a esse serviço. É uma
                especificidade que o poder público não destrincha.”, declara
                Poker.
              </Text>
            </div>
          </ContentImageText>
          <ContentImageText>
            <div>
              <SubTitle>
                “Nós temos a lei que acolhe, mas não temos formação para o
                acolhedor”
              </SubTitle>

              <Text>
                <br />
                <br />
                Aline Plácido, pedagoga que atende imigrantes há 5 anos e
                fundadora da ONG Apoio para Recomeçar, salientou que a “vasta”
                legislação não condiz com as condições da preparação das pessoas
                que realizam o atendimento. “O acolhimento ao imigrante é algo
                recente, o êxodo deve ter algo por volta de 5 a 6 anos", diz
              </Text>

              <Text>
                <br />
                <br />
                Ao falar da ausência de padronização de protocolos a serem
                aplicados no momento da chegada de imigrantes, Aline também
                aponta que a falta de informações se dá em ambos os lados. Ou
                seja, ao mesmo tempo que não tem um manual que liste o
                passo-a-passo dos procedimentos que o imigrante precisa fazer ao
                chegar, também não há capacitação para funcionários de serviços
                públicos responsáveis por esses atendimentos.
              </Text>
              <Text>
                <br />
                <br />
                “Não tem nenhum tipo de manual nacional de orientação ao
                imigrante. De nenhuma nacionalidade. Se eles vão ao hospital, se
                por exemplo um afegão chegar enfermo a um posto de saúde, os
                médicos, as atendentes, sabem falar persa? Tem algum tradutor?
                Não.”
              </Text>
              <Text>
                <br />
                <br />
                “As leis são amplas e ao mesmo tempo limitadas. É direito do
                imigrante o acesso à educação, você matricula a criança e ela
                vai à escola. Coitado do professor, que não fala o idioma, que
                não foi orientado para atender às necessidades da criança e da
                família”, disse.
              </Text>
            </div>
            <ImageRight src={direita} alt="direita" />
          </ContentImageText>
        </TextContent>
      </Container>
    </>
  );
}
