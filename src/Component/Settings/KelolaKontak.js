import React, { Component } from 'react'
import { Tab, Row, Col, Container } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';


export default class KelolaKontak extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Kelola Kontak</h1>
                  <p>Orang yang tercantum di sini adalah kontak yang Anda unggah ke Instagram. Untuk menghapus kontak yang disinkronkan, ketuk Hapus Semua. Kontak akan diunggah kembali saat Instagram menyinkronkan kontak Anda selanjutnya kecuali Anda membuka pengaturan perangkat dan menonaktifkan semua akses ke kontak.</p>
                  <p>Hanya Anda yang dapat melihat kontak, tapi Instagram menggunakan info yang sudah diunggah tentang kontak untuk membuat saran teman bagi Anda dan lainnya, serta memberikan pengalaman yang lebih baik untuk semua orang</p>
                  <hr />
                  <strong>Kontak Tersinkron</strong><br />
                  <a href="/">Hapus Semua</a>
                  <hr />
                  <Kontak />
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}

class Kontak extends Component {
  state = {
    kontak: {
      "data": {
        "user": {
          "contact_history": [
            {
              "first_name": "Fayrose",
              "last_name": null,
              "raw_value": "81216840440",
              "id": "17917220539586984"
            },
            {
              "first_name": "De",
              "last_name": "Kidi",
              "raw_value": "85329104509",
              "id": "17956161493390350"
            },
            {
              "first_name": "De",
              "last_name": "Ghofur",
              "raw_value": "85602639895",
              "id": "17869119863286030"
            },
            {
              "first_name": "Dedi",
              "last_name": null,
              "raw_value": "313554825",
              "id": "18192302254057465"
            },
            {
              "first_name": "Fakih",
              "last_name": null,
              "raw_value": "81336873964",
              "id": "18140686123095011"
            },
            {
              "first_name": "Daus",
              "last_name": null,
              "raw_value": "89518280424",
              "id": "18106269745202178"
            },
            {
              "first_name": "Bu",
              "last_name": "Desi",
              "raw_value": "83120520998",
              "id": "18197027191017643"
            },
            {
              "first_name": "Topik",
              "last_name": null,
              "raw_value": "242256471",
              "id": "18051707851281471"
            },
            {
              "first_name": "Okky",
              "last_name": null,
              "raw_value": "83120879268",
              "id": "17880989660107470"
            },
            {
              "first_name": "Rasya",
              "last_name": null,
              "raw_value": "85325400500",
              "id": "17916754273562853"
            },
            {
              "first_name": "Sufyan",
              "last_name": null,
              "raw_value": "81393242232",
              "id": "17911972183613526"
            },
            {
              "first_name": "Luqman",
              "last_name": "Ngriku",
              "raw_value": "85600016175",
              "id": "17945517556415885"
            },
            {
              "first_name": "Husen",
              "last_name": null,
              "raw_value": "81367959494",
              "id": "17942428867435720"
            },
            {
              "first_name": "U013",
              "last_name": "013",
              "raw_value": "895323275752",
              "id": "18155860786128089"
            },
            {
              "first_name": "Izul",
              "last_name": null,
              "raw_value": "83865548044",
              "id": "17900543059740616"
            },
            {
              "first_name": "Yunus",
              "last_name": null,
              "raw_value": "85795668482",
              "id": "17892466579887909"
            },
            {
              "first_name": "U013",
              "last_name": "013",
              "raw_value": "85799998701",
              "id": "17889698671918919"
            },
            {
              "first_name": "U",
              "last_name": "003",
              "raw_value": "222622514",
              "id": "17885624611989852"
            },
            {
              "first_name": "Idris",
              "last_name": null,
              "raw_value": "85647556229",
              "id": "17874539249130593"
            },
            {
              "first_name": "U",
              "last_name": "003",
              "raw_value": "85733419429",
              "id": "17866199510290334"
            },
            {
              "first_name": "U",
              "last_name": "001",
              "raw_value": "8567801700",
              "id": "17858218538447587"
            },
            {
              "first_name": "U006",
              "last_name": null,
              "raw_value": "82313534097",
              "id": "17914323271574943"
            },
            {
              "first_name": "U006",
              "last_name": null,
              "raw_value": "85889673991",
              "id": "17882726612029535"
            },
            {
              "first_name": "Zaky",
              "last_name": null,
              "raw_value": "895387447898",
              "id": "17911898953571146"
            },
            {
              "first_name": "U",
              "last_name": "Tulus",
              "raw_value": "89686619995",
              "id": "17880450566077134"
            },
            {
              "first_name": "U009",
              "last_name": null,
              "raw_value": "85824000126",
              "id": "18136854844086120"
            },
            {
              "first_name": "U020",
              "last_name": null,
              "raw_value": "225812060",
              "id": "17878817855102107"
            },
            {
              "first_name": "U008",
              "last_name": null,
              "raw_value": "8568410108",
              "id": "18153400150106084"
            },
            {
              "first_name": "U024",
              "last_name": null,
              "raw_value": "895334822112",
              "id": "18188957401024938"
            },
            {
              "first_name": "U010",
              "last_name": null,
              "raw_value": "81313011159",
              "id": "18144659500122048"
            },
            {
              "first_name": "U025",
              "last_name": null,
              "raw_value": "895704302060",
              "id": "17941077979435855"
            },
            {
              "first_name": "Igo",
              "last_name": null,
              "raw_value": "85711313916",
              "id": "17892432454864409"
            },
            {
              "first_name": "M",
              "last_name": "Untsa",
              "raw_value": "85591625317",
              "id": "17870135867215930"
            },
            {
              "first_name": "Usamah",
              "last_name": null,
              "raw_value": "89669235897",
              "id": "17843644613511147"
            },
            {
              "first_name": "Nana",
              "last_name": null,
              "raw_value": "82133751191",
              "id": "17913130147577538"
            },
            {
              "first_name": "U",
              "last_name": "Ibrahim",
              "raw_value": "81226378787",
              "id": "17906960929615620"
            },
            {
              "first_name": "Setren",
              "last_name": null,
              "raw_value": "87708227032",
              "id": "17891298232891814"
            },
            {
              "first_name": "Mas",
              "last_name": "Iyan",
              "raw_value": "8562885551",
              "id": "17955756520391404"
            },
            {
              "first_name": "Mas",
              "last_name": "Ayip",
              "raw_value": "87838364959",
              "id": "17869426619216570"
            },
            {
              "first_name": "P",
              "last_name": "Miyono",
              "raw_value": "85640908639",
              "id": "17895236968783158"
            },
            {
              "first_name": "Shobirin",
              "last_name": null,
              "raw_value": "81542203012",
              "id": "17882425892006552"
            },
            {
              "first_name": "Us",
              "last_name": "Ida",
              "raw_value": "85733650910",
              "id": "17895058720756481"
            },
            {
              "first_name": "U026",
              "last_name": null,
              "raw_value": "81227439669",
              "id": "18164445166077531"
            },
            {
              "first_name": "Ust",
              "last_name": "Asyhuri",
              "raw_value": "8179460945",
              "id": "17865438287208906"
            },
            {
              "first_name": "U012",
              "last_name": null,
              "raw_value": "82115092829",
              "id": "18079015840226980"
            },
            {
              "first_name": "U012",
              "last_name": null,
              "raw_value": "85156408458",
              "id": "18078156976233539"
            },
            {
              "first_name": "Fahmi",
              "last_name": null,
              "raw_value": "81233981627",
              "id": "17926309372457295"
            },
            {
              "first_name": "Bapak",
              "last_name": null,
              "raw_value": "81366930601",
              "id": "17862073073188141"
            },
            {
              "first_name": "U",
              "last_name": "NDM",
              "raw_value": "85725585917",
              "id": "18016393711289815"
            },
            {
              "first_name": "Atikah",
              "last_name": null,
              "raw_value": "81328521713",
              "id": "17859177440287174"
            },
            {
              "first_name": "Ibuk",
              "last_name": null,
              "raw_value": "85229145736",
              "id": "17947724521389604"
            },
            {
              "first_name": "Gondez",
              "last_name": null,
              "raw_value": "85882780616",
              "id": "17851323812348819"
            },
            {
              "first_name": "Mekar",
              "last_name": null,
              "raw_value": "121322445",
              "id": "17891854786693521"
            },
            {
              "first_name": "Sarno",
              "last_name": null,
              "raw_value": "81227820549",
              "id": "18140790565102755"
            },
            {
              "first_name": "Ikhwan",
              "last_name": null,
              "raw_value": "895414992314",
              "id": "17871914911986087"
            },
            {
              "first_name": "Slt",
              "last_name": null,
              "raw_value": "89612195574",
              "id": "17905014919542045"
            },
            {
              "first_name": "Kanzan",
              "last_name": null,
              "raw_value": "81214014202",
              "id": "17887450987731205"
            },
            {
              "first_name": "U015",
              "last_name": null,
              "raw_value": "81477056337",
              "id": "17850351254334431"
            },
            {
              "first_name": "PLN",
              "last_name": null,
              "raw_value": "8122123123",
              "id": "17888904550712348"
            },
            {
              "first_name": "P",
              "last_name": "Eko",
              "raw_value": "8122221975",
              "id": "18053016868254830"
            },
            {
              "first_name": "U002",
              "last_name": null,
              "raw_value": "82197773041",
              "id": "17876876860889695"
            },
            {
              "first_name": "Token",
              "last_name": "Pa",
              "raw_value": "4377863148",
              "id": "18163883290004411"
            },
            {
              "first_name": "Royyan",
              "last_name": "Komp",
              "raw_value": "240401355",
              "id": "18102965002175212"
            },
            {
              "first_name": "Bude",
              "last_name": "Wid",
              "raw_value": "85899640803",
              "id": "17923016260446961"
            },
            {
              "first_name": "Asrama",
              "last_name": "Putri",
              "raw_value": "89507939829",
              "id": "17898174811580350"
            },
            {
              "first_name": "Hisam",
              "last_name": null,
              "raw_value": "87822556049",
              "id": "17916766816464023"
            },
            {
              "first_name": "Ami",
              "last_name": null,
              "raw_value": "81804191015",
              "id": "17864801738064643"
            },
            {
              "first_name": "U Abu",
              "last_name": "Bakar",
              "raw_value": "81804474440",
              "id": "18053681887247286"
            },
            {
              "first_name": "Fuad",
              "last_name": null,
              "raw_value": "81228901689",
              "id": "17961564895328910"
            },
            {
              "first_name": "P",
              "last_name": "Hengki",
              "raw_value": "270314079",
              "id": "17873105716889409"
            },
            {
              "first_name": "U",
              "last_name": "Yusuf",
              "raw_value": "87835446606",
              "id": "17857988735158740"
            },
            {
              "first_name": "Liska",
              "last_name": null,
              "raw_value": "85320689905",
              "id": "17865350738048817"
            },
            {
              "first_name": "U012",
              "last_name": null,
              "raw_value": "85351525239",
              "id": "18131214943129226"
            },
            {
              "first_name": "M",
              "last_name": "Mar",
              "raw_value": "81335203993",
              "id": "18113883301148306"
            },
            {
              "first_name": "Fajar",
              "last_name": "Sukma",
              "raw_value": "82328104617",
              "id": "18035782777272687"
            },
            {
              "first_name": "Dziki",
              "last_name": null,
              "raw_value": "895328315102",
              "id": "17962105090338057"
            },
            {
              "first_name": "M",
              "last_name": "Sarnu",
              "raw_value": "82326004811",
              "id": "17957816263350439"
            },
            {
              "first_name": "Fuhak",
              "last_name": null,
              "raw_value": "85743515386",
              "id": "17939601952375988"
            },
            {
              "first_name": "Dzikri",
              "last_name": "Sintesa",
              "raw_value": "81214773702",
              "id": "17935815319395822"
            },
            {
              "first_name": "B",
              "last_name": "Wiwik",
              "raw_value": "81210752092",
              "id": "17935765195401285"
            },
            {
              "first_name": "Bandeng",
              "last_name": null,
              "raw_value": "81393014685",
              "id": "17932907098407221"
            },
            {
              "first_name": "M",
              "last_name": "Larto",
              "raw_value": "85291076056",
              "id": "17917335199458680"
            },
            {
              "first_name": "M",
              "last_name": "Ti",
              "raw_value": "82142395767",
              "id": "17905516471517879"
            },
            {
              "first_name": "U015",
              "last_name": "015",
              "raw_value": "82125006187",
              "id": "17899011037536866"
            },
            {
              "first_name": "Paidek",
              "last_name": "Rosyidi",
              "raw_value": "82336524710",
              "id": "17897319340568740"
            },
            {
              "first_name": "Hanif",
              "last_name": "R",
              "raw_value": "87878561773",
              "id": "17889162823636401"
            },
            {
              "first_name": "Jibur",
              "last_name": "Baru",
              "raw_value": "327751664",
              "id": "17886631879661945"
            },
            {
              "first_name": "Paidi",
              "last_name": null,
              "raw_value": "81239495425",
              "id": "17886142771688725"
            },
            {
              "first_name": "M",
              "last_name": "Huma",
              "raw_value": "81225597454",
              "id": "17885283061695131"
            },
            {
              "first_name": "U",
              "last_name": "Munawwarah",
              "raw_value": "81317611315",
              "id": "17884551850728159"
            },
            {
              "first_name": "U014",
              "last_name": "014",
              "raw_value": "81298515600",
              "id": "17881699021746781"
            },
            {
              "first_name": "Matin",
              "last_name": "Matin",
              "raw_value": "895341808551",
              "id": "17877326548809206"
            },
            {
              "first_name": "M",
              "last_name": "Anik",
              "raw_value": "81615443323",
              "id": "17876736391819804"
            },
            {
              "first_name": "U007",
              "last_name": "007",
              "raw_value": "82129552984",
              "id": "17875808635857028"
            },
            {
              "first_name": "Bapak",
              "last_name": null,
              "raw_value": "8122983672",
              "id": "17869442407922087"
            },
            {
              "first_name": "M",
              "last_name": "Siyem",
              "raw_value": "85268751966",
              "id": "17868438028980156"
            },
            {
              "first_name": "M",
              "last_name": "Huma",
              "raw_value": "85722255805",
              "id": "17865109880032693"
            },
            {
              "first_name": "U016",
              "last_name": "016",
              "raw_value": "85229301710",
              "id": "17863765859061685"
            },
            {
              "first_name": "M",
              "last_name": "Yatmi",
              "raw_value": "82328303146",
              "id": "17854482584180819"
            },
            {
              "first_name": "U005",
              "last_name": "005",
              "raw_value": "85295331289",
              "id": "17853932063207326"
            },
            {
              "first_name": "Dziki",
              "last_name": null,
              "raw_value": "85546439002",
              "id": "17853407711221293"
            },
            {
              "first_name": "APS",
              "last_name": null,
              "raw_value": "2318336547",
              "id": "17850347885259320"
            },
            {
              "first_name": "Mail",
              "last_name": "Hasan",
              "raw_value": "85546088172",
              "id": "17842491545364784"
            },
            {
              "first_name": "Jamil",
              "last_name": null,
              "raw_value": "82134376100",
              "id": "17905026283504155"
            },
            {
              "first_name": "Ust",
              "last_name": "Aka",
              "raw_value": "8176532300",
              "id": "18157452415004334"
            },
            {
              "first_name": "Ami",
              "last_name": null,
              "raw_value": "87726947301",
              "id": "18112142980179710"
            },
            {
              "first_name": "Ami",
              "last_name": "Noor",
              "raw_value": "509988569",
              "id": "17945252392364977"
            },
            {
              "first_name": "Hasan",
              "last_name": null,
              "raw_value": "81802541000",
              "id": "17938281643387265"
            },
            {
              "first_name": "Asna",
              "last_name": null,
              "raw_value": "8567538000",
              "id": "17925495346426914"
            },
            {
              "first_name": "Supeno",
              "last_name": null,
              "raw_value": "87834037001",
              "id": "17923296421434054"
            },
            {
              "first_name": "Lek",
              "last_name": "Yayuk",
              "raw_value": "373164869",
              "id": "17915709898457283"
            },
            {
              "first_name": "Fadhil",
              "last_name": null,
              "raw_value": "82323353098",
              "id": "17899363966551564"
            },
            {
              "first_name": "U",
              "last_name": "Mukhlis",
              "raw_value": "82328199499",
              "id": "17895451000577567"
            },
            {
              "first_name": "U",
              "last_name": "Fadli",
              "raw_value": "89661589105",
              "id": "17885947630663198"
            },
            {
              "first_name": "U",
              "last_name": "018",
              "raw_value": "87781546162",
              "id": "17880419857732134"
            },
            {
              "first_name": "Ust",
              "last_name": "Mukhtar",
              "raw_value": "81329088644",
              "id": "17876670199779601"
            },
            {
              "first_name": "Dafa",
              "last_name": null,
              "raw_value": "83850524745",
              "id": "17860095230089580"
            },
            {
              "first_name": "P",
              "last_name": "Irsan",
              "raw_value": "283185771",
              "id": "17858137787093325"
            },
            {
              "first_name": "Zaki",
              "last_name": null,
              "raw_value": "81393547730",
              "id": "17842993727337269"
            },
            {
              "first_name": "Ocim",
              "last_name": null,
              "raw_value": "85747726282",
              "id": "18154997914005075"
            },
            {
              "first_name": "U",
              "last_name": "014",
              "raw_value": "85722020424",
              "id": "17854919054104747"
            },
            {
              "first_name": "CS",
              "last_name": "OVO",
              "raw_value": "1500696",
              "id": "18054635257230678"
            },
            {
              "first_name": "Kiky",
              "last_name": null,
              "raw_value": "89664989698",
              "id": "17882023258589827"
            },
            {
              "first_name": "U",
              "last_name": "H",
              "raw_value": "85728932365",
              "id": "17865932791755229"
            },
            {
              "first_name": "Huda",
              "last_name": null,
              "raw_value": "89691782187",
              "id": "17852861554917942"
            },
            {
              "first_name": "Lukman",
              "last_name": null,
              "raw_value": "8813853678",
              "id": "18084913783160244"
            },
            {
              "first_name": "CS",
              "last_name": "GRAMEDIA",
              "raw_value": "81931341285",
              "id": "18023754769260483"
            },
            {
              "first_name": "Cakwe",
              "last_name": null,
              "raw_value": "83819656215",
              "id": "18085767226159832"
            },
            {
              "first_name": "Insan",
              "last_name": null,
              "raw_value": "82221824763",
              "id": "17926019887366985"
            },
            {
              "first_name": "Taliya",
              "last_name": null,
              "raw_value": "85766777005",
              "id": "17885176348496206"
            },
            {
              "first_name": "Dita",
              "last_name": null,
              "raw_value": "89655558554",
              "id": "17865552418651656"
            },
            {
              "first_name": "Ante",
              "last_name": null,
              "raw_value": "506786767",
              "id": "17854122418801535"
            },
            {
              "first_name": "P",
              "last_name": "Puguh",
              "raw_value": "85222300281",
              "id": "17859914161658843"
            },
            {
              "first_name": "Ridwan",
              "last_name": null,
              "raw_value": "89644222771",
              "id": "18122367004052082"
            },
            {
              "first_name": "Lek",
              "last_name": "Lis",
              "raw_value": "82241255644",
              "id": "17944090888312043"
            },
            {
              "first_name": "Token",
              "last_name": "Internet",
              "raw_value": "2318827840",
              "id": "17845914550818629"
            },
            {
              "first_name": "Rara",
              "last_name": null,
              "raw_value": "82337084218",
              "id": "18026435920232778"
            },
            {
              "first_name": "Ustz",
              "last_name": "Masyitoh",
              "raw_value": "816675154",
              "id": "18009130009255675"
            },
            {
              "first_name": "Kantor",
              "last_name": null,
              "raw_value": "81222216800",
              "id": "17907020377371244"
            },
            {
              "first_name": "Om",
              "last_name": "Suyat",
              "raw_value": "85815783048",
              "id": "17906929798374734"
            },
            {
              "first_name": "Rara",
              "last_name": null,
              "raw_value": "85791176734",
              "id": "17901172867381034"
            },
            {
              "first_name": "Bude",
              "last_name": "Nani",
              "raw_value": "82242249912",
              "id": "17894758615392638"
            },
            {
              "first_name": "P",
              "last_name": "Rizal",
              "raw_value": "83892801416",
              "id": "17890237150418971"
            },
            {
              "first_name": "Galon",
              "last_name": null,
              "raw_value": "81313373885",
              "id": "17889719887413265"
            },
            {
              "first_name": "Rara",
              "last_name": null,
              "raw_value": "85823490920",
              "id": "17880970696454022"
            },
            {
              "first_name": "Bu",
              "last_name": "Surni",
              "raw_value": "82116839096",
              "id": "17873312539478626"
            },
            {
              "first_name": "Rara",
              "last_name": null,
              "raw_value": "85232298683",
              "id": "17848102660689666"
            },
            {
              "first_name": "U Faqih",
              "last_name": "H",
              "raw_value": "85728932365",
              "id": "18075700069185676"
            },
            {
              "first_name": "Pak",
              "last_name": "Tris",
              "raw_value": "81214083240",
              "id": "18023280031202339"
            },
            {
              "first_name": "Taliya",
              "last_name": null,
              "raw_value": "85766777005",
              "id": "18033433858131714"
            },
            {
              "first_name": "Bos",
              "last_name": "Habib",
              "raw_value": "85889673991",
              "id": "17858095057395041"
            },
            {
              "first_name": "Sufyan",
              "last_name": null,
              "raw_value": "81393242232",
              "id": "17851660177419205"
            },
            {
              "first_name": "Token",
              "last_name": "Pondok",
              "raw_value": "4233317487",
              "id": "17850963409423392"
            },
            {
              "first_name": "U",
              "last_name": "Mukhlis",
              "raw_value": "82328199499",
              "id": "18018571975194171"
            },
            {
              "first_name": "Pondok",
              "last_name": null,
              "raw_value": "82213423971",
              "id": "17893394116317385"
            },
            {
              "first_name": "Mujib",
              "last_name": null,
              "raw_value": "81359007701",
              "id": "17878569286352549"
            },
            {
              "first_name": "Nisa",
              "last_name": null,
              "raw_value": "85829301710",
              "id": "17949594817278331"
            },
            {
              "first_name": "Wali",
              "last_name": "Khansya",
              "raw_value": "81311342269",
              "id": "18057423556007260"
            },
            {
              "first_name": "Rosyidi",
              "last_name": null,
              "raw_value": "81239495425",
              "id": "18032533846086405"
            },
            {
              "first_name": "Mas",
              "last_name": "Seman",
              "raw_value": "85327834646",
              "id": "18055566748003817"
            },
            {
              "first_name": "Dedi",
              "last_name": null,
              "raw_value": "82313554825",
              "id": "18055249804063023"
            },
            {
              "first_name": "Pak",
              "last_name": "Tris",
              "raw_value": "81214083240",
              "id": "17988159352218425"
            },
            {
              "first_name": "Bude",
              "last_name": "Nani",
              "raw_value": "82242249912",
              "id": "18054123865020159"
            },
            {
              "first_name": "Kantor",
              "last_name": null,
              "raw_value": "81222216800",
              "id": "17992870696201805"
            },
            {
              "first_name": "Abdul",
              "last_name": "Matin",
              "raw_value": "895341808551",
              "id": "17854964047379846"
            },
            {
              "first_name": "Mbak",
              "last_name": "Anik",
              "raw_value": "81615443323",
              "id": "17944631431279757"
            },
            {
              "first_name": "Ustz",
              "last_name": "Masyitoh",
              "raw_value": "816675154",
              "id": "17846382868407939"
            },
            {
              "first_name": "Lek",
              "last_name": "Yayuk",
              "raw_value": "81373164869",
              "id": "17864552722360581"
            },
            {
              "first_name": "Fadhil",
              "last_name": null,
              "raw_value": "82323353098",
              "id": "18009295078174683"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Amri",
              "raw_value": "82324974659",
              "id": "18054471712043387"
            },
            {
              "first_name": "U",
              "last_name": "010",
              "raw_value": "85862899227",
              "id": "18051373735039811"
            },
            {
              "first_name": "Wali",
              "last_name": "Ukasyah",
              "raw_value": "85691235666",
              "id": "18049668619030900"
            },
            {
              "first_name": "Wali",
              "last_name": "Nanda",
              "raw_value": "85261324200",
              "id": "18049574461060800"
            },
            {
              "first_name": "Sicek",
              "last_name": null,
              "raw_value": "85743515386",
              "id": "18049524709022565"
            },
            {
              "first_name": "Supeno",
              "last_name": null,
              "raw_value": "87834037001",
              "id": "18049406449011552"
            },
            {
              "first_name": "Wali",
              "last_name": "Nanda",
              "raw_value": "8129299910",
              "id": "18049087582050163"
            },
            {
              "first_name": "U",
              "last_name": "005",
              "raw_value": "85848283525",
              "id": "18047815492020445"
            },
            {
              "first_name": "Wali",
              "last_name": "Ilham",
              "raw_value": "89678166217",
              "id": "18032428786110191"
            },
            {
              "first_name": "U",
              "last_name": "015",
              "raw_value": "89669127791",
              "id": "18030842515120143"
            },
            {
              "first_name": "U",
              "last_name": "Ibrahim",
              "raw_value": "81226378787",
              "id": "18030634795115214"
            },
            {
              "first_name": "U",
              "last_name": "Fadli",
              "raw_value": "89661589105",
              "id": "18023701171081701"
            },
            {
              "first_name": "Wali",
              "last_name": "Rajwa",
              "raw_value": "81287845411",
              "id": "18019960999179802"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Juraij",
              "raw_value": "89607987039",
              "id": "18016832242176117"
            },
            {
              "first_name": "Dafa",
              "last_name": null,
              "raw_value": "83850524745",
              "id": "18016034998155788"
            },
            {
              "first_name": "U",
              "last_name": "H",
              "raw_value": "85728932365",
              "id": "17985696292205731"
            },
            {
              "first_name": "U",
              "last_name": "012",
              "raw_value": "8562705154",
              "id": "17982087802216597"
            },
            {
              "first_name": "Wali",
              "last_name": "Najla",
              "raw_value": "81310506346",
              "id": "17981446117219213"
            },
            {
              "first_name": "U",
              "last_name": "004",
              "raw_value": "89517287478",
              "id": "17972331994231876"
            },
            {
              "first_name": "Wali",
              "last_name": "Riski",
              "raw_value": "895358039329",
              "id": "17947426816268341"
            },
            {
              "first_name": "Yunus",
              "last_name": null,
              "raw_value": "85795668482",
              "id": "17947304182265604"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Rafi",
              "raw_value": "85274151338",
              "id": "17877838579324752"
            },
            {
              "first_name": "U",
              "last_name": "002",
              "raw_value": "85725666064",
              "id": "17864047195355167"
            },
            {
              "first_name": "Ust",
              "last_name": "Aka",
              "raw_value": "85891117000",
              "id": "17843980675401259"
            },
            {
              "first_name": "Boss",
              "last_name": null,
              "raw_value": "895328315102",
              "id": "18050220742050801"
            },
            {
              "first_name": "Wali",
              "last_name": "Arini",
              "raw_value": "82324423695",
              "id": "18048682906027737"
            },
            {
              "first_name": "U",
              "last_name": "014",
              "raw_value": "81298515600",
              "id": "18048613276028954"
            },
            {
              "first_name": "Simbah",
              "last_name": null,
              "raw_value": "83865548044",
              "id": "18048416467009671"
            },
            {
              "first_name": "U",
              "last_name": "007",
              "raw_value": "82126710600",
              "id": "18048220576056105"
            },
            {
              "first_name": "Wali",
              "last_name": "Noval",
              "raw_value": "85882291168",
              "id": "18047656849028527"
            },
            {
              "first_name": "Bunda",
              "last_name": null,
              "raw_value": "85229145736",
              "id": "18040803823074555"
            },
            {
              "first_name": "Lek",
              "last_name": null,
              "raw_value": "81214014202",
              "id": "18040055728079632"
            },
            {
              "first_name": "Ayah",
              "last_name": null,
              "raw_value": "8122983672",
              "id": "18039249841079024"
            },
            {
              "first_name": "Ustz",
              "last_name": "Munawwarah",
              "raw_value": "81317611315",
              "id": "18032787415101562"
            },
            {
              "first_name": "U",
              "last_name": "Tri",
              "raw_value": "89523288382",
              "id": "18032602255114247"
            },
            {
              "first_name": "Wali",
              "last_name": "Fajar",
              "raw_value": "87787127736",
              "id": "18032554900109014"
            },
            {
              "first_name": "Rosyid",
              "last_name": "Bangka",
              "raw_value": "87848263053",
              "id": "18031081168115718"
            },
            {
              "first_name": "Ms",
              "last_name": "Wanto",
              "raw_value": "895414992314",
              "id": "18020642332184249"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Hasyim",
              "raw_value": "89525170229",
              "id": "18019428427185649"
            },
            {
              "first_name": "Grandong",
              "last_name": null,
              "raw_value": "85339185953",
              "id": "18017970727176963"
            },
            {
              "first_name": "Ust",
              "last_name": "Aka",
              "raw_value": "8176532300",
              "id": "18015006052157081"
            },
            {
              "first_name": "Ustz",
              "last_name": "Eva",
              "raw_value": "895390849047",
              "id": "17983184497223399"
            },
            {
              "first_name": "Wali",
              "last_name": "Ilyas",
              "raw_value": "82133097475",
              "id": "17981962147222017"
            },
            {
              "first_name": "Ustz",
              "last_name": "Sh1",
              "raw_value": "81904159589",
              "id": "17972820448233241"
            },
            {
              "first_name": "Hasan",
              "last_name": null,
              "raw_value": "81802541000",
              "id": "17971957201235395"
            },
            {
              "first_name": "U",
              "last_name": "006",
              "raw_value": "81351240640",
              "id": "17971651915241804"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Dimas",
              "raw_value": "81210752092",
              "id": "17955899446248468"
            },
            {
              "first_name": "Wali",
              "last_name": "Hawa",
              "raw_value": "82320624787",
              "id": "17955188668254426"
            },
            {
              "first_name": "U",
              "last_name": "001",
              "raw_value": "8567801700",
              "id": "17954053921260976"
            },
            {
              "first_name": "Mbak",
              "last_name": "Ti",
              "raw_value": "82142395767",
              "id": "17953978900262388"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Zaki",
              "raw_value": "81275105116",
              "id": "17947234465271128"
            },
            {
              "first_name": "Wali",
              "last_name": "R",
              "raw_value": "88808519672",
              "id": "17926161949286580"
            },
            {
              "first_name": "P",
              "last_name": "Rizal",
              "raw_value": "83892801416",
              "id": "17873358298336482"
            },
            {
              "first_name": "Waliyah",
              "last_name": "R",
              "raw_value": "87878561773",
              "id": "17864457739352893"
            },
            {
              "first_name": "U",
              "last_name": "015",
              "raw_value": "82125006187",
              "id": "17858371180367489"
            },
            {
              "first_name": "P",
              "last_name": "Puguh",
              "raw_value": "85222300281",
              "id": "17854704763374730"
            },
            {
              "first_name": "U",
              "last_name": "003",
              "raw_value": "81222622514",
              "id": "17848710421382616"
            },
            {
              "first_name": "Ante",
              "last_name": null,
              "raw_value": "506786767",
              "id": "18049176892017274"
            },
            {
              "first_name": "Waliyah",
              "last_name": "Najla",
              "raw_value": "82249026146",
              "id": "18048532615051414"
            },
            {
              "first_name": "Wali",
              "last_name": "Yasmin",
              "raw_value": "85719150267",
              "id": "18048385303013475"
            },
            {
              "first_name": "U",
              "last_name": "005",
              "raw_value": "85295331289",
              "id": "18047885488049547"
            },
            {
              "first_name": "U",
              "last_name": "0102",
              "raw_value": "85294824661",
              "id": "18021616012143191"
            },
            {
              "first_name": "Ustz",
              "last_name": "Sh2",
              "raw_value": "85725566183",
              "id": "18017165335182667"
            },
            {
              "first_name": "Zaki",
              "last_name": null,
              "raw_value": "81393547730",
              "id": "18016303702147742"
            },
            {
              "first_name": "Asna",
              "last_name": null,
              "raw_value": "8567538000",
              "id": "18009312754171353"
            },
            {
              "first_name": "U",
              "last_name": "008",
              "raw_value": "8568410108",
              "id": "17870415049341188"
            },
            {
              "first_name": "U",
              "last_name": "013",
              "raw_value": "895323275752",
              "id": "17844011266401410"
            },
            {
              "first_name": "Dr",
              "last_name": "Wati",
              "raw_value": "8122593556",
              "id": "17966278843117141"
            },
            {
              "first_name": "Fadhil4",
              "last_name": null,
              "raw_value": "82323353098",
              "id": "17938660642195878"
            },
            {
              "first_name": "Dr",
              "last_name": "Agus",
              "raw_value": "81329038465",
              "id": "17905769059241171"
            },
            {
              "first_name": "Yusuf",
              "last_name": "Ir",
              "raw_value": "85728966235",
              "id": "17980194913011637"
            },
            {
              "first_name": "Ali",
              "last_name": "N",
              "raw_value": "89510160226",
              "id": "17979844435062818"
            },
            {
              "first_name": "U",
              "last_name": "C",
              "raw_value": "85351525239",
              "id": "17979363454058809"
            },
            {
              "first_name": "De",
              "last_name": "Ghafur2",
              "raw_value": "85962310985",
              "id": "17979227404057291"
            },
            {
              "first_name": "Satria2",
              "last_name": null,
              "raw_value": "87812527320",
              "id": "17978864440008884"
            },
            {
              "first_name": "Fadhil2",
              "last_name": null,
              "raw_value": "81226004432",
              "id": "17978602696017175"
            },
            {
              "first_name": "U",
              "last_name": "B",
              "raw_value": "83131884046",
              "id": "17978464909053640"
            },
            {
              "first_name": "U",
              "last_name": "B",
              "raw_value": "85862899227",
              "id": "17978420203001178"
            },
            {
              "first_name": "Fadhil3",
              "last_name": null,
              "raw_value": "81578971175",
              "id": "17977908172033834"
            },
            {
              "first_name": "U",
              "last_name": "005",
              "raw_value": "85848283525",
              "id": "17965133002100906"
            },
            {
              "first_name": "Fajar",
              "last_name": "Syarif",
              "raw_value": "83111135549",
              "id": "17964693496098875"
            },
            {
              "first_name": "U",
              "last_name": "007",
              "raw_value": "85293164907",
              "id": "17963986228115172"
            },
            {
              "first_name": "U",
              "last_name": "008",
              "raw_value": "8568410108",
              "id": "17963936296107257"
            },
            {
              "first_name": "U",
              "last_name": "012",
              "raw_value": "8562705154",
              "id": "17960831218125637"
            },
            {
              "first_name": "U",
              "last_name": "006",
              "raw_value": "81351240640",
              "id": "17957881654083350"
            },
            {
              "first_name": "Mas",
              "last_name": "No",
              "raw_value": "81326052528",
              "id": "17957482966094205"
            },
            {
              "first_name": "Taufiq2",
              "last_name": null,
              "raw_value": "83863130622",
              "id": "17953886689140852"
            },
            {
              "first_name": "U",
              "last_name": "014",
              "raw_value": "81298515600",
              "id": "17953045630191913"
            },
            {
              "first_name": "Igo",
              "last_name": null,
              "raw_value": "85854585191",
              "id": "17952558046191178"
            },
            {
              "first_name": "Om",
              "last_name": "2",
              "raw_value": "85882780616",
              "id": "17952368323193639"
            },
            {
              "first_name": "U",
              "last_name": "004",
              "raw_value": "89517287478",
              "id": "17952102838193248"
            },
            {
              "first_name": "U",
              "last_name": "010",
              "raw_value": "87879589280",
              "id": "17950889137182247"
            },
            {
              "first_name": "U",
              "last_name": "013",
              "raw_value": "895323275752",
              "id": "17949901663147221"
            },
            {
              "first_name": "Hakim",
              "last_name": null,
              "raw_value": "81334674594",
              "id": "17949780106147532"
            },
            {
              "first_name": "Faqih",
              "last_name": "Gtt",
              "raw_value": "85877711892",
              "id": "17949288070151691"
            },
            {
              "first_name": "U",
              "last_name": "B",
              "raw_value": "82126710600",
              "id": "17947060879165545"
            },
            {
              "first_name": "Faqih",
              "last_name": "Gtt2",
              "raw_value": "85796385763",
              "id": "17916197980220579"
            },
            {
              "first_name": "Isa2",
              "last_name": null,
              "raw_value": "83138361641",
              "id": "17905821673228507"
            },
            {
              "first_name": "Satria3",
              "last_name": null,
              "raw_value": "83107743406",
              "id": "17905797811239396"
            },
            {
              "first_name": "Mahfudz",
              "last_name": null,
              "raw_value": "83834428481",
              "id": "17889179698253932"
            },
            {
              "first_name": "U",
              "last_name": "003",
              "raw_value": "81222622514",
              "id": "17887584799261330"
            },
            {
              "first_name": "Suhaib",
              "last_name": null,
              "raw_value": "8562703048",
              "id": "17872057957274250"
            },
            {
              "first_name": "Ali",
              "last_name": "N2",
              "raw_value": "895414536644",
              "id": "17857409362285215"
            },
            {
              "first_name": "Ahmad",
              "last_name": "Rosyidi",
              "raw_value": "81239495425",
              "id": "17848519051289717"
            },
            {
              "first_name": "Wafa",
              "last_name": "Md",
              "raw_value": "81312802401",
              "id": "17939861947089638"
            },
            {
              "first_name": "Kanzan2",
              "last_name": null,
              "raw_value": "83870696133",
              "id": "17957793187006152"
            },
            {
              "first_name": "De",
              "last_name": "Suki",
              "raw_value": "85329104509",
              "id": "17943128332111958"
            },
            {
              "first_name": "U",
              "last_name": "Musa",
              "raw_value": "81225255541",
              "id": "17884515076226633"
            },
            {
              "first_name": "Nafi'2",
              "last_name": null,
              "raw_value": "82139276627",
              "id": "17956282777048349"
            },
            {
              "first_name": "Ghufron",
              "last_name": null,
              "raw_value": "85702262312",
              "id": "17913143647195763"
            },
            {
              "first_name": "Mail3",
              "last_name": null,
              "raw_value": "85546088172",
              "id": "17882437444225247"
            },
            {
              "first_name": "Ridlwan2",
              "last_name": null,
              "raw_value": "89644222771",
              "id": "17864346493259682"
            },
            {
              "first_name": "M",
              "last_name": "Rosyidi3",
              "raw_value": "82336524710",
              "id": "17880948478236451"
            },
            {
              "first_name": "M",
              "last_name": "Rosyidi2",
              "raw_value": "85226588617",
              "id": "17930914024086784"
            },
            {
              "first_name": "M",
              "last_name": "Ikhwan",
              "raw_value": "85606590366",
              "id": "17918922034161307"
            },
            {
              "first_name": "Muhammad",
              "last_name": null,
              "raw_value": "895341808551",
              "id": "17858825533258097"
            },
            {
              "first_name": "Insan",
              "last_name": "Th",
              "raw_value": "82221824763",
              "id": "17921258713192883"
            },
            {
              "first_name": "Hendarto",
              "last_name": "Md",
              "raw_value": "83825913263",
              "id": "17886634891212043"
            },
            {
              "first_name": "Galih",
              "last_name": "Md",
              "raw_value": "89522121272",
              "id": "17932385710113354"
            },
            {
              "first_name": "M",
              "last_name": "Fatkhur3",
              "raw_value": "81333200163",
              "id": "17869140619244096"
            },
            {
              "first_name": "Galih",
              "last_name": "Md",
              "raw_value": "87821339765",
              "id": "17855292622257659"
            },
            {
              "first_name": "Abah",
              "last_name": "Mujahidin",
              "raw_value": "8125910822",
              "id": "17945833504022298"
            },
            {
              "first_name": "Usamah2",
              "last_name": null,
              "raw_value": "8159864791",
              "id": "17931228694107526"
            },
            {
              "first_name": "Wafa",
              "last_name": "Md2",
              "raw_value": "85314366897",
              "id": "17928504820121834"
            },
            {
              "first_name": "Faris2",
              "last_name": null,
              "raw_value": "83104441275",
              "id": "17915647981179339"
            },
            {
              "first_name": "Usamah",
              "last_name": null,
              "raw_value": "85865597378",
              "id": "17944215985017262"
            },
            {
              "first_name": "Ahmad",
              "last_name": "Hafidz2",
              "raw_value": "85326817050",
              "id": "17909876452172175"
            },
            {
              "first_name": "M",
              "last_name": "Fatkhur2",
              "raw_value": "81230878187",
              "id": "17914326655176210"
            },
            {
              "first_name": "Yusuf",
              "last_name": "Alin",
              "raw_value": "87739216088",
              "id": "17869620715235637"
            },
            {
              "first_name": "Jibur",
              "last_name": null,
              "raw_value": "85878875712",
              "id": "17842966501270689"
            },
            {
              "first_name": "Ahmad",
              "last_name": "Hafidz",
              "raw_value": "82315368608",
              "id": "17928507154096053"
            },
            {
              "first_name": "Imam",
              "last_name": null,
              "raw_value": "85701951253",
              "id": "17928044107105184"
            },
            {
              "first_name": "Taufiq",
              "last_name": null,
              "raw_value": "83815625597",
              "id": "17882927443204906"
            },
            {
              "first_name": "Isa",
              "last_name": null,
              "raw_value": "82320715442",
              "id": "17880029695205406"
            },
            {
              "first_name": "Husin2",
              "last_name": null,
              "raw_value": "85851768164",
              "id": "17940762115038310"
            },
            {
              "first_name": "Kanzan",
              "last_name": null,
              "raw_value": "8817641971",
              "id": "17940464365013884"
            },
            {
              "first_name": "Mas",
              "last_name": "Heri",
              "raw_value": "85257606145",
              "id": "17939793781041994"
            },
            {
              "first_name": "Fuad",
              "last_name": "Afif",
              "raw_value": "83822252799",
              "id": "17939714188002250"
            },
            {
              "first_name": "Luqman",
              "last_name": "Ngruki",
              "raw_value": "85702699174",
              "id": "17939682895009398"
            },
            {
              "first_name": "Thoriq",
              "last_name": null,
              "raw_value": "83896224938",
              "id": "17939417569017371"
            },
            {
              "first_name": "Fadhil",
              "last_name": null,
              "raw_value": "81329141110",
              "id": "17939153563028557"
            },
            {
              "first_name": "Ust",
              "last_name": "Basith",
              "raw_value": "81573080443",
              "id": "17939009869063688"
            },
            {
              "first_name": "Ustz",
              "last_name": "Arina",
              "raw_value": "85725666064",
              "id": "17938993960018002"
            },
            {
              "first_name": "Satria",
              "last_name": null,
              "raw_value": "81910060592",
              "id": "17938915207027580"
            },
            {
              "first_name": "Rosyid",
              "last_name": "Bangka",
              "raw_value": "87848263053",
              "id": "17938839739001095"
            },
            {
              "first_name": "Ustz",
              "last_name": "Munawwarah",
              "raw_value": "81317611315",
              "id": "17938825999042986"
            },
            {
              "first_name": "Kholil",
              "last_name": null,
              "raw_value": "82241035304",
              "id": "17938645693059949"
            },
            {
              "first_name": "U",
              "last_name": "H",
              "raw_value": "85728932365",
              "id": "17938595506033662"
            },
            {
              "first_name": "Vania",
              "last_name": "Md",
              "raw_value": "83120528778",
              "id": "17938332934062554"
            },
            {
              "first_name": "Muzaffar2",
              "last_name": null,
              "raw_value": "82377857322",
              "id": "17938197391019270"
            },
            {
              "first_name": "Bpk",
              "last_name": "Alfa",
              "raw_value": "85222300281",
              "id": "17937636190051984"
            },
            {
              "first_name": "Lek",
              "last_name": "Iput",
              "raw_value": "85536826765",
              "id": "17934256009066675"
            },
            {
              "first_name": "Abi",
              "last_name": "Dzar",
              "raw_value": "85876630573",
              "id": "17933587630068997"
            },
            {
              "first_name": "Ustz",
              "last_name": "Eva",
              "raw_value": "895390849047",
              "id": "17933463880070173"
            },
            {
              "first_name": "Mbak",
              "last_name": "Ti",
              "raw_value": "82142395767",
              "id": "17930287834073360"
            },
            {
              "first_name": "Bu",
              "last_name": "Ningsih",
              "raw_value": "89691556640",
              "id": "17926866607100043"
            },
            {
              "first_name": "Mail",
              "last_name": null,
              "raw_value": "8985666360",
              "id": "17925946012129968"
            },
            {
              "first_name": "Om",
              "last_name": "Gondez",
              "raw_value": "81298414037",
              "id": "17925942538105466"
            },
            {
              "first_name": "Jamil",
              "last_name": null,
              "raw_value": "85604310539",
              "id": "17925887125099300"
            },
            {
              "first_name": "Ustz",
              "last_name": "Maryam",
              "raw_value": "85642401958",
              "id": "17925703078111028"
            },
            {
              "first_name": "Dziky",
              "last_name": "2",
              "raw_value": "89668560936",
              "id": "17925504058128220"
            },
            {
              "first_name": "Khuzain",
              "last_name": null,
              "raw_value": "81215079630",
              "id": "17925287584102178"
            },
            {
              "first_name": "Ust",
              "last_name": "Ayatullah",
              "raw_value": "8567801700",
              "id": "17924315947127149"
            },
            {
              "first_name": "Kajaztan",
              "last_name": null,
              "raw_value": "85870492746",
              "id": "17923060951126445"
            },
            {
              "first_name": "Izul3",
              "last_name": null,
              "raw_value": "8975017892",
              "id": "17922729700120597"
            },
            {
              "first_name": "Fuha",
              "last_name": null,
              "raw_value": "85743515386",
              "id": "17920208794085447"
            },
            {
              "first_name": "Ocim",
              "last_name": null,
              "raw_value": "85868364315",
              "id": "17920178299085736"
            },
            {
              "first_name": "Muzaffar",
              "last_name": null,
              "raw_value": "83850524745",
              "id": "17920145914086773"
            },
            {
              "first_name": "Ustz",
              "last_name": "Sh2",
              "raw_value": "85725566183",
              "id": "17920032073090460"
            },
            {
              "first_name": "Print",
              "last_name": "Sumber",
              "raw_value": "82214184888",
              "id": "17919987622087756"
            },
            {
              "first_name": "Bu",
              "last_name": "Desy",
              "raw_value": "82321365284",
              "id": "17919948559083500"
            },
            {
              "first_name": "Maryono",
              "last_name": null,
              "raw_value": "83866094319",
              "id": "17919848425092422"
            },
            {
              "first_name": "Faza",
              "last_name": null,
              "raw_value": "81578329482",
              "id": "17919815023088516"
            },
            {
              "first_name": "Adhim",
              "last_name": null,
              "raw_value": "85791816927",
              "id": "17914839619143572"
            },
            {
              "first_name": "Rosyid",
              "last_name": "H",
              "raw_value": "8990341828",
              "id": "17914772011187753"
            },
            {
              "first_name": "M",
              "last_name": "Rosyidi",
              "raw_value": "85725545144",
              "id": "17914398814138908"
            },
            {
              "first_name": "Huda",
              "last_name": null,
              "raw_value": "89635155760",
              "id": "17914251169139488"
            },
            {
              "first_name": "Rifaah",
              "last_name": null,
              "raw_value": "89515406219",
              "id": "17914155577142845"
            },
            {
              "first_name": "Musthofa",
              "last_name": null,
              "raw_value": "87737365573",
              "id": "17913734497139247"
            },
            {
              "first_name": "Ustz",
              "last_name": "Sh1",
              "raw_value": "81904159589",
              "id": "17913693898138862"
            },
            {
              "first_name": "Ikhwanuddin",
              "last_name": null,
              "raw_value": "85701321581",
              "id": "17913500128191645"
            },
            {
              "first_name": "De",
              "last_name": "Ghafur",
              "raw_value": "85700362756",
              "id": "17913412405185956"
            },
            {
              "first_name": "Dziky",
              "last_name": null,
              "raw_value": "895328315102",
              "id": "17913382642191711"
            },
            {
              "first_name": "Anan",
              "last_name": null,
              "raw_value": "82323429327",
              "id": "17913065824131088"
            },
            {
              "first_name": "Ridlwan",
              "last_name": null,
              "raw_value": "85243062989",
              "id": "17913032617191004"
            },
            {
              "first_name": "Idris",
              "last_name": null,
              "raw_value": "85647556229",
              "id": "17912517898182876"
            },
            {
              "first_name": "Yunus",
              "last_name": null,
              "raw_value": "85795668482",
              "id": "17912075899179342"
            },
            {
              "first_name": "Ocim",
              "last_name": null,
              "raw_value": "85713690281",
              "id": "17912066296177721"
            },
            {
              "first_name": "P",
              "last_name": "Andito",
              "raw_value": "81931661166",
              "id": "17911513129155214"
            },
            {
              "first_name": "Izul",
              "last_name": null,
              "raw_value": "83865548044",
              "id": "17911330360179167"
            },
            {
              "first_name": "Zaki",
              "last_name": null,
              "raw_value": "81393547730",
              "id": "17910942577150950"
            },
            {
              "first_name": "Ghifar",
              "last_name": null,
              "raw_value": "82137993557",
              "id": "17910680659158692"
            },
            {
              "first_name": "Umi",
              "last_name": null,
              "raw_value": "85229145736",
              "id": "17910298708157944"
            },
            {
              "first_name": "Abi",
              "last_name": null,
              "raw_value": "8122983672",
              "id": "17910268972157515"
            },
            {
              "first_name": "Ust",
              "last_name": "Supardi",
              "raw_value": "87736484504",
              "id": "17908687222167421"
            },
            {
              "first_name": "Asna",
              "last_name": null,
              "raw_value": "8567538000",
              "id": "17908446739160273"
            },
            {
              "first_name": "Indi",
              "last_name": "home",
              "raw_value": "81568446434",
              "id": "17907061546175768"
            },
            {
              "first_name": "Yunus",
              "last_name": "Semanggi",
              "raw_value": "85729660444",
              "id": "17898218407199416"
            },
            {
              "first_name": "Khoiril",
              "last_name": null,
              "raw_value": "85943619250",
              "id": "17897178409199726"
            },
            {
              "first_name": "Mail2",
              "last_name": null,
              "raw_value": "81216665538",
              "id": "17878494346213696"
            },
            {
              "first_name": "Khalis",
              "last_name": null,
              "raw_value": "82338138574",
              "id": "17878407391211234"
            },
            {
              "first_name": "Mufidin",
              "last_name": null,
              "raw_value": "83845331086",
              "id": "17878382932214385"
            },
            {
              "first_name": "Nadhif",
              "last_name": null,
              "raw_value": "85727405364",
              "id": "17878013929218649"
            },
            {
              "first_name": "Faris",
              "last_name": null,
              "raw_value": "8812610271",
              "id": "17878002076209627"
            },
            {
              "first_name": "Nafi'",
              "last_name": null,
              "raw_value": "87835507900",
              "id": "17877953725222506"
            },
            {
              "first_name": "Izul2",
              "last_name": null,
              "raw_value": "83866683048",
              "id": "17866239361235392"
            },
            {
              "first_name": "Ahmad",
              "last_name": "Hasan",
              "raw_value": "81802541000",
              "id": "17866223125237690"
            },
            {
              "first_name": "Ust",
              "last_name": "Aka",
              "raw_value": "8176532300",
              "id": "17866210582236609"
            },
            {
              "first_name": "Hamzah",
              "last_name": "Gr",
              "raw_value": "85712004631",
              "id": "17865727354234499"
            },
            {
              "first_name": "Irsyad",
              "last_name": null,
              "raw_value": "83866840998",
              "id": "17865636934239148"
            },
            {
              "first_name": "Jihad",
              "last_name": null,
              "raw_value": "87722367055",
              "id": "17864774371242164"
            },
            {
              "first_name": "Husin",
              "last_name": null,
              "raw_value": "82132743452",
              "id": "17850306553247963"
            },
            {
              "first_name": "Wahid",
              "last_name": null,
              "raw_value": "85865581302",
              "id": "17850122923247941"
            },
            {
              "first_name": "Jihad",
              "last_name": null,
              "raw_value": "87736162606",
              "id": "17848897087252182"
            },
            {
              "first_name": "M",
              "last_name": "Fatkhur",
              "raw_value": "85856783894",
              "id": "17848865455255221"
            }
          ]
        }
      },
      "status": "ok"
    }
  }
  render() {
    return (
      <div>
        {
          this.state.kontak.data.user.contact_history.map((item, i) =>
            <div key={i}>
              <strong>{item.first_name} {item.last_name}</strong>
              <p>+62{item.raw_value}</p>
              <br />
            </div>
          )
        }
      </div>
    )
  }
}
