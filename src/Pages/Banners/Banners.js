import './Banners.css';
import DisplayBanners from './DisplayBanners';

const bannerData = [
  {
      image: "https://th.bing.com/th/id/R.c0f7aefe7127313c4d73a79c58c2bb87?rik=4vb1c2tYEv2ppQ&riu=http%3a%2f%2fcdn.textileschool.com%2fwp-content%2fuploads%2f2010%2f10%2fpexels-photo-404171.jpeg&ehk=sp3qO8SGsVPMMFMsXojRnxgkl8WCXJ651%2bSrZhFT1TM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
      image: "https://th.bing.com/th/id/R.83c8b9c0ee721ef792e6e357ec0820fe?rik=ST8VelmzGmEO%2bA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1561365452-adb940139ffa%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=RUi5MmTNg9uvIzfy2hZDiDuNTLHdoqdXUBPDhA2k5nY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
      image: "https://perfectsourcing.net/wp-content/uploads/2018/11/Garment-Manufacturing.jpg",
  },
  {
      image: "https://th.bing.com/th/id/R.710fb4466d22d5ced1ed9485739258e9?rik=LKmNHlcBVbo7Lg&riu=http%3a%2f%2fwww.cottonyarn.co%2fResources%2fContent%2fInner%2f637205958473779230.jpg&ehk=1nydfWwlXFk5iLmGkjomLyMoa7TFpe0xS9lhDZf47Tw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  },
  {
      image: "https://th.bing.com/th/id/OIP.3rBPPPqzYcUdmOwnRL3FfgHaEK?pid=ImgDet&rs=1",
  }
]

function Banners() {
  return (
    <div class="w-full pic-ctn">
     {
              bannerData.map(slide => <DisplayBanners
                  key={slide.id}
                  slide={slide}
              ></DisplayBanners>)
          }
  </div>
  );
}

export default Banners;
