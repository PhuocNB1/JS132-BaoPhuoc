const container = document.querySelector(".home-select.phim-bo");

const listPhimBo = [
    {
        link: "https://fptplay.vn/xem-video/ngu-long-dai-nao-634a3068d7389bb4bd498083",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/11/ngu-long-dai-nao-30-tap-fpt-play-1665461013414_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Ngũ Long Đại Náo',
    },
    {
        link: "https://fptplay.vn/xem-video/cong-chua-ngo-ngao-bach-tuyet-6343cdc07c1f4e33fddb9427",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/10/cong-chua-ngo-ngao-bach-tuyet-10-tap-fpt-play-1665366316105_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Công Chúa Ngổ Ngáo: Bạch Tuyết',
    },
    {
        link: "https://fptplay.vn/xem-video/nu-thanh-tra-tai-ba-61403e0a2089bd026164819e",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/07/26/nu-thanh-tra-tai-ba-docquyen_lg26-07-2022_13g45-08.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Nữ Thanh Tra Tài Ba',
    },
    {
        link: "https://fptplay.vn/xem-video/mong-ho-diep-63327bfa018158d643cdb66e",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/09/27/mong-ho-diep-10-tap-fpt-play-1664247058839_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Mộng Hồ Điệp',
    },
    {
        link: "https://fptplay.vn/xem-video/ban-co-an-toan-631b007c43e5357fdad61e8b",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/09/09/ban-co-an-toan-31-tap-fpt-play-1662713911470_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Bạn Có An Toàn?',
    },
    {
        link: "https://fptplay.vn/xem-video/yen-chi-rookie-agent-rouge-63356d21e02c8347a0f706b6",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/09/27/yen-chi-45-tap-fpt-play-1664251056243_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Yên Chi',
    },
];

const listTVshow = [
    {
        link: "https://fptplay.vn/xem-video/giao-lo-thoi-gian-quang-ha-ha-nhi-633ae30147a1961a00148d7e",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/03/giao-lo-thoi-gian-quang-ha---ha-nhi-fpt-play-1664790541412_Landscape.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Giao Lộ Thời Gian: Quang Hà - Hà Nhi',
    },
    {
        link: "https://fptplay.vn/xem-video/fashup-2022-by-tiktok-633d0e0740c4eb4e3712cbed",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/04/fashup-2022-by-tiktok-fpt-play-1664876799851_Landscape.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Fash Up 2022 By TikTok',
    },
    {
        link: "https://fptplay.vn/xem-video/the-khang-show-62ef725bddac64895fd017e5",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/08/08/thekhangshow_2022_vn_b_50t_ott_n08-08-2022_10g18-02.jpg?w=282&mode=scale&fmt=webp",
        desc: 'The Khang Show',
    },
    {
        link: "https://fptplay.vn/xem-video/hau-boi-du-ky-631845ea95cfffa45899e829",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/09/09/hauboiduky_bghd09-09-2022_15g00-20.jpg?w=282&mode=scale&fmt=webp",
        desc: "Young Actor's Retreat",
    },
    {
        link: "https://fptplay.vn/xem-video/thu-thach-than-tuong-5215971ec969287094465754",
        img: "https://images.fptplay.net/media/OTT/VOD/2022/07/18/runningman2022_2022_kr_b_50t_ott_n18-07-2022_10g44-12.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Thử thách thần tượng',
    },
    {
        link: "https://fptplay.vn/xem-video/doan-dai-di-633bdde5137de6e32a7289b5",
        img: "https://images.fptplay.net/media/OTT/VOD/2022/11/02/doan-dai-di-fpt-play-1667373508806_Landscape.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Đoán đại đi',
    },
];

const listHerobaby = [
    {
        link: "https://fptplay.vn/xem-video/ops-tu-quai-sieu-quay-613087602089bd03a6b57bee",
        img: "https://static.fptplay.net/static/img/share/video/03_09_2021/opswhatahopsriblepack_2019_it_b_52t162023-fpt-play03-09-2021_14g36-58.jpg?w=282&mode=scale&fmt=webp",
        desc: 'OPS - Tứ Quái Siêu Quậy',
    },
    {
        link: "https://fptplay.vn/xem-video/morphle-va-mia-sat-canh-ben-nhau-623c4b53e439af21a64f5b14",
        img: "https://static.fptplay.net/static/img/share/video/25_03_2022/morphleandmiabetogether_2011_gb_b_30t_ott125-03-2022_16g50-11.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Morphle và Mia - Sát Cánh Bên Nhau',
    },
    {
        link: "https://fptplay.vn/xem-video/nguoi-hung-gordon-627e1fecf981e1f25f03e0bb",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/05/12/nguoi-hung-gordon-30-tap-fpt-play-1652343674549_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Người Hùng Gordon',
    },
    {
        link: "https://fptplay.vn/xem-video/nhat-ky-khung-long-627e10e1dcdad706872861a5",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/04/28/nhat-ky-khung-long-fpt-play-1651106301975_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Nhật Ký Khủng Long',
    },
    {
        link: "https://fptplay.vn/xem-video/bac-thay-ket-hop-suc-manh-toi-thuong-627cd499ad3c736a18f84341",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/04/27/bac-thay-ket-hop-suc-manh-toi-thuong-39-tap-fpt-play-1651075220044_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Bậc Thầy Kết Hợp: Sức Mạnh Tối Thượng',
    },
    {
        link: "https://fptplay.vn/xem-video/oddbods-tinh-ban-ben-lau-6274e0409540ea5e4b2a3e32",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/05/06/oddbods---tinh-ban-ben-lau-20-tap-fpt-play-1651807889036_Portrait_origin.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Oddbods - Tình Bạn Bền Lâu',
    },
];

const listGolf = [
    {
        link: "https://fptplay.vn/xem-video/top-10-cu-danh-an-tuong-liv-golf-jeddah-2022-634e0d907fbdb3fe0f30dad9",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/18/jeddahshots_1666059537782.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Top 10 cú đánh ấn tượng',
    },
    {
        link: "https://fptplay.vn/xem-video/top-10-cu-danh-hong-an-liv-golf-jeddah-2022-634e0d5ec1e6b6a763993e3f",
        img : "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/18/jeddahmisses_1666059289033.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Top 10 cú đánh hỏng ăn',
    },
    {
        link: "https://fptplay.vn/xem-video/top-10-bunker-shot-an-tuong-liv-golf-jeddah-2022-634e0d7790bc132be4275fcf",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/18/jeddahbunkers_1666059416879.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Top 10 Bunker Shot ấn tượng',
    },
    {
        link: "https://fptplay.vn/xem-video/top-10-cu-chip-an-tuong-liv-golf-jeddah-2022-634e0d84eb636e16fe48e155",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/18/jeddahchips_1666059471444.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Top 10 cú chip ấn tượng',
    },
    {
        link: "https://fptplay.vn/xem-video/top-10-bunker-shot-an-tuong-liv-golf-jeddah-2022-634e0d7790bc132be4275fcf",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/18/jeddahbunkers_1666059416879.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Top 10 Bunker Shot ấn tượng',
    },
    {
        link: "https://fptplay.vn/xem-video/top-10-cu-chip-an-tuong-liv-golf-jeddah-2022-634e0d84eb636e16fe48e155",
        img: "https://static.fptplay.net/static/img/share/video/OTT/VOD/2022/10/18/jeddahchips_1666059471444.jpg?w=282&mode=scale&fmt=webp",
        desc: 'Top 10 cú chip ấn tượng',
    },
];

function getHTMLContent(list, isHorizontal = false) {
    const cls = isHorizontal 
    ? "home-select-menu-item-img-horizon" 
    : "home-select-menu-item-img";
    let result = "";
    for (let i = 0; i < list.length; i++) {
        result += `
        <div class="home-select-menu-item">
        <a class="home-select-menu-item-link"
            href="${list[i].link}"
            target="_blank">
            <img class="${cls}"
                src="${list[i].img}" />
        </a>
        <a class="home-select-menu-item-link"
            href="${list[i].link}"
            target="_blank">
            <p class="home-select-menu-item-txt">${list[i].desc}</p>
        </a>
    </div>
        `;
    }
    return result;
}

function insertHTML(query, html) {
    const element = document.querySelector(query);
    element.innerHTML = html
}

insertHTML(".phim-bo .home-select-menu", getHTMLContent(listPhimBo))
insertHTML(".tv-show .home-select-menu", getHTMLContent(listTVshow), true)
insertHTML(".herobaby .home-select-menu", getHTMLContent(listHerobaby))
insertHTML(".golf .home-select-menu", getHTMLContent(listGolf), true)


$(document).ready(function(){
    $(".home-select-menu").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });
  });


  const accountstr = localStorage.getItem('account');
  const pageSection = document.getElementById ('page')
  if (accountstr){
      let account = JSON.parse(accountstr)
      pageSection.innerHTML = `<strong>${account.phone}</strong>`
  }
  