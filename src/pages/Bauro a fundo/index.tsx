import { useRef } from "react";
import {
  Container,
  ContainerTitle,
  ContentImageText,
  ContentText,
  ContentTitle,
  ContentVideo,
  ContentVideoText,
  Eye,
  Image,
  Image2,
  ImageContent,
  ImageLeft,
  ImageRight,
  LegendData,
  Logo,
  Space,
  Space2,
  SubTitle,
  Text,
  TextContent,
  Title,
} from "./styles";
import divider1 from "../../assets/divider1.png";
import logoImg from "../../assets/logo.png";
import grafico8 from "../../assets/grafico9.svg";
import grafico7 from "../../assets/grafico8.svg";
import esquerda from "../../assets/esquerda.png";
import direita from "../../assets/direita.png";
import { Carrossel } from "../../components/Carrossel";

export function BauruAFundo() {
  const bauruAFundoRef = useRef(null);
  const bauruAFundoDocumentarioRef = useRef(null);
  const bauruAFundoGaleriaRef = useRef(null);
  return (
    <>
      <Space id="bauruAFundo" ref={bauruAFundoRef} />
      <Container>
        <TextContent>
          <ContentTitle>
            <Logo src={logoImg} alt="logo" />
            <ContainerTitle>
              <Title>
                Imigrantes <br />
                hispano-americanos
                <br /> em Bauru
              </Title>
              <Text>
                A imigracao é subjetiva. Cada história conhecida mostra quão
                diferentes as experiências migratórias são, até mesmo em uma
                cidade de 379 mil habitantes no interior de São Paulo, como
                Bauru. Acompanhamos a rotina de quatro imigrantes
                hispano-americanos na cidade e registramos suas histórias em
                episódios de documentário.
                <br /> <br /> Confira:
              </Text>
            </ContainerTitle>
          </ContentTitle>
          <Space2
            id="bauruAFundoDocumentario"
            ref={bauruAFundoDocumentarioRef}
          />
          <ContentVideoText>
            <ContentVideo>
              <iframe
                width="400"
                height="315"
                src="https://www.youtube.com/embed/R-rMXgr7IB4?si=4uKJQZL6pNCnXGQo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </ContentVideo>
            <ContentText>
              <Text>
                Daniel Sebastián Flores Trujillo, de 26 anos, nasceu em Quito,
                capital do Equador. Ele é apaixonado por futebol, assim, quando
                aos 21 anos perguntaram para ele em qual país ele gostaria de
                fazer um intercâmbio acadêmico, a resposta foi óbvia: o Brasil.
                Há 5 anos da sua decisão, Daniel reside em Bauru, cidade que o
                recebeu de braços abertos e onde ele decidiu criar raízes.
              </Text>
            </ContentText>
          </ContentVideoText>

          <ContentVideoText>
            <ContentText>
              <Text>
                Com as malas feitas às pressas e uma vida toda deixada para
                trás, Sulleydis Aurora Barceló e Júlio Ovídio Aguilera passaram
                a fronteira entre a Venezuela e o Brasil. Tendo passagens por
                Manaus e Mineiros do Tietê, em 2021 chegam à Bauru. O casal e a
                filha adolescente fazem da arte da pâtisserie, com um toque da
                culinária venezuelana – e agora também a brasileira– o seu
                sustento. Com um sotaque marcado e um sorriso no rosto, a
                família também decidiu criar raízes na cidade.
              </Text>
            </ContentText>
            <ContentVideo>
              <iframe
                width="400"
                height="315"
                src="https://www.youtube.com/embed/P7N2hYOuvjM?si=Mqtau0syiBn20K1j"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </ContentVideo>
          </ContentVideoText>

          <ContentImageText>
            <ImageLeft src={esquerda} alt="esquerda" />
            <div>
              <SubTitle>Por que Bauru?</SubTitle>

              <Text>
                <br />
                <br />
                “Morar aqui é ter uma paz que nunca achei que teria em lugar
                algum”. Foi assim que Daniel descreveu sua vida na cidade. A
                qualidade de vida no município está em vários relatos, não só de
                imigrantes, mas de paulistas de todo o Estado que decidiram se
                mudar à cidade. Localizada no interior, Bauru não apresenta a
                escala das grandes cidades. Enquanto São Paulo tem uma densidade
                de 7,5 mil pessoas/km², Bauru tem 568 pessoas/km², segundo o
                último Censo realizado em 2022.
              </Text>

              <Text>
                <br />
                <br />
                Os problemas de mobilidade, habitação e desigualdade social
                encontrados nos grandes centros urbanos podem acentuar ainda
                mais a vulnerabilidade da situação de imigrantes. Além das
                barreiras de idioma e documentação, 4 dos 10 países com o maior
                número de imigrantes têm algum tipo de crise econômica, política
                ou ambiental, fator que leva muitos a entrarem no Brasil em
                condição de refugiados.
              </Text>

              <Eye>
                Em 2022, era a cidade mais populosa do Centro-Oeste e a 18ª
                maior em população entre os municípios de São Paulo, segundo o
                último Censo.
              </Eye>
            </div>
          </ContentImageText>
          <Text>
            <br />
            Ao ser questionada sobre o que motiva essas pessoas a ficarem na
            cidade, Aline Plácido, fundadora da ONG Apoio para recomeçar, ri e
            diz “Por que não ficar?”. Para a pedagoga, a estrutura de serviços
            públicos, custo de vida e infraestrutura da cidade comporta e
            oferece qualidade de vida para essas pessoas. “Se chegam aqui e
            encontram educação para os filhos, saúde pública e trabalho, não tem
            porque ir embora”.
          </Text>
          <Text>
            <br />
            Por mais que a cidade comporte novos moradores, o inchaço no
            município e as condições dos recém chegados acentuou a necessidade
            da aplicação de políticas públicas de atendimento, acolhimento e
            fomento aos imigrantes. O Proadi (Programa de Orientação e Acesso à
            Documentação Civil e Atendimento ao Imigrante) atendeu 65 imigrantes
            desde janeiro de 2022 – 36 venezuelanos, 12 afegãos, 7 angolanos, 4
            colombianos, 2 peruanos, 1 boliviano, 1 francês, 1 cubano e ainda um
            brasileiro retornando do exterior. Todos foram encaminhados ao
            serviço de acompanhamento socioassistencial.
          </Text>

          <ImageContent>
            <Image src={grafico7} alt="grafico7" />
            <LegendData>
              Fonte: Sismigra / Ministério da Justiça e Segurança Pública
            </LegendData>
          </ImageContent>
          <Text>
            <br />
            Aline iniciou seu trabalho voluntário com a população imigrante em
            2019, quando ingressou no instituto Caritas, dando aulas de Língua
            Portuguesa para três famílias em Bauru. Com a chegada da pandemia e
            o “boom” de imigrantes, Aline passou a atender 12 famílias entre a
            cidade, Agudos e Pederneiras. Em 2023, a ONG atende 70 famílias da
            região.
          </Text>

          <Text>
            <br />
            “Quando você ensina o português para o estrangeiro, você deixa de
            ser apenas um professor, você acaba fazendo outros acolhimentos. Eu
            tive que ir além das aulas de portugês, tive que encaminhar para
            como ir ao hospital, como fazer matrícula escolar”, lembrou a
            pedagoga. Com a demanda e a necessidade de um atendimento
            institucionalizado, abriu as portas da ONG em em 2022.
          </Text>

          <Text>
            <br />
            Venezuelanos, angolanos e afegãos estão entre as nacionalidades mais
            atendidas atualmente, mas Aline destaca que a cidade tem um grande
            fluxo migratório temporário de países como o Equador e a República
            Dominicana, cujos imigrantes não são encaminhados para atendimentos
            sociais, como mostraram os dados de imigração citados anteriormente.
          </Text>

          <ImageContent>
            <Image src={grafico8} alt="grafico8" />
            <LegendData>
              Fonte: Sismigra / Ministério da Justiça e Segurança Pública
            </LegendData>
          </ImageContent>

          <Text>
            <br />A organização presta auxílio para a obtenção de documentação,
            encaminhamento a serviços essenciais, como os de saúde, educação e
            moradia, e também realiza o acompanhamento social dessas famílias. A
            organização também oferece aulas da “língua de acolhimento”, termo
            que Aline usa para denominar o português, idioma que imigrantes
            precisam utilizar para serem incorporados à sociedade. As aulas, que
            acontecem duas vezes por semana, abordam o ensino básico da língua,
            uso prático do idioma e conceitos de legislação trabalhista e
            direitos do imigrante.
          </Text>

          <Text>
            <br />
            Aline, que trabalha com o acompanhamento dessa população há cinco
            anos, ressalta que as variáveis que colocam imigrantes em situações
            de vulnerabilidade são variadas e que cada família tem suas
            particularidades. Ela também diz que há uma predominância de
            hispano-americanos na cidade. De todos os imigrantes que estiveram
            na cidade até outubro de 2023, 97% são hispano-americanos.
          </Text>

          <ContentImageText>
            <div>
              <SubTitle>Trabalho e cidade</SubTitle>

              <Text>
                <br />
                <br />
                Para serem inseridos no mercado de trabalho, não dominar a
                língua nacional e não ter conhecimento de seus direitos coloca
                muitos imigrantes em risco de serem explorados. “Para o
                imigrante a vulnerabilidade perpassa o social e o econômico. Ela
                pode cair em situações análogas à escravidão, como é visto na
                capital”, diz Aline.
              </Text>

              <Text>
                <br />
                <br />
                Além da qualidade dos serviços, muitos chegam à cidade depois de
                terem passado por outras localidades em situações adversas, como
                casos de violência, xenofobia e exploração trabalhista. Aline
                ressalta que esse último ponto é um dos mais delicados e de
                maior atenção para a ONG.
              </Text>
              <Text>
                <br />
                <br />
                Oferecidas em conjunto com a prefeitura, atividades de aulas de
                capacitação profissional, tradução de processos e encaminhamento
                para vagas de emprego e parcerias com empresas privadas da
                cidade são alternativas para empregar imigrantes e garantir seus
                direitos ao trabalho e a condições dignas de emprego.
              </Text>
              <Eye>
                96,31% dos vistos expedidos nos últimos 5 anos são temporários
                (destinados àqueles com a intenção de estabelecer residência no
                Brasil por prazo determinado), enquanto os vistos residentes e
                provisórios não chegam a 4%.
              </Eye>
            </div>
            <ImageRight src={direita} alt="direita" />
          </ContentImageText>

          <Text>
            <br />
            Oportunidades de empreendedorismo e prestação de serviços são
            características da economia do Estado de São Paulo e propício para
            imigrantes, segundo o professor José Geraldo Poker. Aline também
            salienta que a maioria dos estrangeiros que residem na cidade se
            dedicam a esse tipo de atividade. A Sedecon (Secretaria de
            Desenvolvimento Econômico, Turismo e Renda de Bauru) realizou dois
            eventos de integração e documentação para imigrantes. A 2ª edição do
            Gera Bauru contou com a participação da OAB (Ordem dos Advogados do
            Brasil), empresas de recrutamento e a Apoio para Recomeçar. O evento
            atendeu 55 pessoas.
          </Text>
          <Text>
            <br />A Sedecon (Secretaria de Desenvolvimento Econômico, Turismo e
            Renda de Bauru) realizou dois eventos de integração e documentação
            para imigrantes. A 2ª edição do Gera Bauru contou com a participação
            da OAB (Ordem dos Advogados do Brasil), empresas de recrutamento e a
            Apoio para Recomeçar. O evento atendeu 55 pessoas.
          </Text>
          <Text>
            <br />
            De acordo com o projeto Oportunidades - Integração no Brasil, da
            Agência da ONU para migrações (OIM) entre dezembro e julho de 2023,
            5885 refugiados ou imigrantes em situação de vulnerabilidade
            receberam treinamentos em empreendedorismo no Brasil.
          </Text>

          <Text>
            <br />
            Desse total, 4030 foram contratados. Apesar de 79% das pessoas
            treinadas serem mulheres, 59% dos contratados eram homens. A mesma
            discrepância se repete para cursos profissionalizantes, com 58% de
            mulheres no ensino.
          </Text>

          <Text>
            <br />
            Além de hábitos e costumes culturais que são deixados para trás no
            processo da imigração, para exercer atividades econômicas e poder se
            sustentar, muitos imigrantes deixam para trás até mesmo suas
            carreiras. A legislação exige que diplomas profissionais sejam
            validados em instituições de ensino superior brasileiras. Dependendo
            do grau de instrução, o processo pode custar até R$3.000.
          </Text>
          <Text id="bauruAFundoGaleria" ref={bauruAFundoGaleriaRef}>
            <br />
            Os altos custos e as condições de urgência que muitos estrangeiros
            têm para tirar seu sustento fazem com que eles optem por realizar
            atividades diferentes daquelas que tinha no país de origem, muitas
            vezes com salários substancialmente menores por não requererem
            ensino superior. “Eu nunca me imaginei, a este ponto da minha vida,
            ter que vender doces”, disse Sulleydis, que é professora do ensino
            fundamental aposentada.
          </Text>

          <Text>
            <br />
            Júlio Aguilera é confeiteiro venezuelano que, junto à esposa
            Sulleydis e a filha do casal, comercializam massas da pâtisserie
            francesa e também pratos típicos do seu país nas feiras itinerantes
            da cidade. Além da barreira da língua, eles salientam que tiveram
            que ultrapassar outro desafio: o paladar. “Nós tivemos que mudar
            tudo. Adaptar nossos doces adicionando leite Ninho, Nutella,
            brigadeiro, doce de leite. Além de colocar requeijão, catupiry e
            calabresa nos salgados”, disse.
          </Text>

          <Carrossel />

          <Text>
            <br />O casal trabalha de 2ª feira a sábado na confecção e venda da
            produção de massas. A cada dia da semana eles integram as feiras que
            se deslocam pelas regiões da cidade. A entrada na lista de feirantes
            não foi um processo fácil, mas burocrático e certamente demorado. Ao
            chegarem à cidade no final de 2021, Júlio procurou a organização das
            feiras para poder trabalhar, mas teve que esperar até março de 2022
            por falta de vagas.
          </Text>

          <Text>
            <br />
            Uma vez presente nas feiras, a barraca do casal exibe com orgulho os
            mais variados doces e empanadas todos os dias em suas vitrines, com
            a receita adaptada para agradar o consumidor bauruense, que também
            tem à disposição no local opções de comidas mais familiares aos
            brasileiros, como pastéis e lanches.
          </Text>
          <Text>
            <br />
            No entanto, às 4ª feiras, as vendas se tornam um pouco mais
            familiares para o casal.Nesse dia da semana, a feira é realizada
            periodicamente no parque Vitória Régia, localizado à frente do
            campus da USP e de outros centros de especialização na área da
            saúde. Nesse local, a feira recebe a visita principalmente de ,
            professores e médicos – muitos deles hispano-americanos. Somente
            nesse dia da semana, Sully e Júlio preparam e vendem arepas, uma
            massa de farinha de milho pré-cozida e recheada de carnes e molhos
            temperados, um prato típico de países como Bolívia, Colômbia, Panamá
            e Venezuela e muito conhecido pelo continente.
          </Text>
          <Text>
            <br />O local se torna uma feira multicultural, cheia de sotaques
            castelhanos dos mais variados e também repleta de motivos para
            estarem em Bauru. A barraca venezuelana chega a esgotar seu estoque
            de arepas, além de doces que essas pessoas compram e levam consigo
            como uma lembrança de seu idioma e seus países.
          </Text>
          <Text>
            <br />
            Aos poucos essa população se integra e se acolhe entre si no idioma
            e semelhanças gastronômicas das suas culturas. “Num desses dias uma
            menina colombiana, que conheci grávida, trouxe a filha para me
            conhecer na feira. Os clientes vão se tornando sua família”, disse
            Sulleydis. No domingo, para a gravação do Raízes, o casal convidou a
            irmã de Sulleydis, um vizinho e duas famílias amigas na cidade.
            Todos eles venezuelanos. No dia, eles prepararam um cachapas, uma
            massa de arepas recheada com frango desfiado, banana da terra e
            queijo, típico do seu país.
          </Text>
          <Text>
            <br />
            *Mariana e Fernanda são nomes fictícios dados às duas entrevistadas,
            que preferiram não ter suas identidades publicadas
          </Text>
        </TextContent>
        <Image2 src={divider1} alt="divider1" />
      </Container>
    </>
  );
}

// import { useRef } from "react";
// import { Notice } from "../../components/Notice";
// import { Container, ContainerGradient, Content, ContentNotice } from "./styles";

// export function BauruAFundo() {
//   const bauruAFundoRef = useRef(null);
//   return (
//     <Container id="bauruAFundo" ref={bauruAFundoRef}>
//       <ContainerGradient>
//         <Content>
//           <iframe
//             width="490"
//             height="315"
//             src="https://www.youtube.com/embed/qZXzb7OqdAs?si=AevmMdW2DTQwhBEn"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </Content>
//         <ContentNotice>
//           <Notice />
//         </ContentNotice>
//       </ContainerGradient>
//     </Container>
//   );
// }
