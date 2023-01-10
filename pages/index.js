import Head from 'next/head'
import Image from 'next/image'
import img1 from '../public/imgs/2-1.jpg';
import img2 from '../public/imgs/2-2.jpg';
import img3 from '../public/imgs/2-3.jpg';
import img4 from '../public/imgs/2-4.jpg';
import img5 from '../public/imgs/3-1.jpg';
import img6 from '../public/imgs/3-2.jpg';
import img7 from '../public/imgs/3-3.jpg';
import img8 from '../public/imgs/3-4.jpg';
import styles from '../styles/Home.module.css'
import {Box, Card, Stack, Typography} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const second_images = [
  {alt: '2-1', img: img1},
  {alt: '2-2', img: img2},
  {alt: '2-3', img: img3},
  {alt: '2-4', img: img4},
]

const third_images = [
  {alt: '3-1', img: img5},
  {alt: '3-2', img: img6},
  {alt: '3-3', img: img7},
  {alt: '3-4', img: img8},
]


export default function Home() {
  const settings = {
    //カルーセルの設定
    autoplay: true,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    centerMode: true,
    autoplaySpeed: 5000,
    speed: 800,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrow: false,
  };

  return (
    <>
      <Head>
        <title>待ち時間表示サイネージ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftbox}>
          <Stack direction={'column'} spacing={4}>
            <Typography variant={'h2'} sx={{borderBottom: 'solid 1px black', paddingBottom: '1px', marginBottom: '30px'}}>
              本日のメニュー
            </Typography>
            <Card sx={{ boxShadow: 2, marginBottom: '20px', padding: '20px', maxWidth: '900px', minHeight: '350px'}} >
              <Stack direction={'column'}>
                <Box sx={{ border: '1px solid black'}} width={'100px'}>
                  <Typography variant={'h4'}>
                    2階
                  </Typography>
                </Box>
                <Slider {...settings} >
                  {second_images && second_images.map(({alt, img}, idx) => {
                    return (
                        <Image key={idx} src={img} alt={alt} width={300} height={200}></Image>
                    )
                  })}
                </Slider>
              </Stack>
            </Card>
            <Card sx={{ boxShadow: 2, marginBottom: '20px', padding: '20px', maxWidth: '900px', minHeight: '350px'}}>
              <Stack direction={'column'}>
                <Box sx={{ border: '1px solid black'}} width={'100px'}>
                  <Typography variant={'h4'}>
                    2階
                  </Typography>
                </Box>
                <Slider {...settings} >
                  {third_images && third_images.map(({alt, img}, idx) => {
                    return (
                        <Image key={idx} src={img} alt={alt} width={300} height={200}></Image>
                    )
                  })}
                </Slider>
              </Stack>
            </Card>
          </Stack>
        </div>
        <div className={styles.rightbox}>
          <Stack direction={'column'} spacing={4}>
            <Typography variant={'h2'} sx={{borderBottom: 'solid 1px black', paddingBottom: '1px', marginBottom: '30px'}}>
              現在の混雑状況
            </Typography>
            <Card sx={{ boxShadow: 2, marginBottom: '20px', padding: '10px', maxWidth: '900px', minHeight: '350px', maxHeight: '350px'}} >
              <Stack direction={'column'}>
                <Box sx={{ border: '1px solid black'}} width={'100px'}>
                  <Typography variant={'h4'}>
                    2階
                  </Typography>
                </Box>
                <div className={styles.centerBox}>
                  <Typography variant={'h5'}>
                    現在の待ち時間は
                  </Typography>
                  <Typography variant={'h3'}>
                    約4分です
                  </Typography>
                </div>
              </Stack>
            </Card>
            <Card sx={{ boxShadow: 2, marginBottom: '20px', padding: '10px', maxWidth: '900px', minHeight: '350px', maxHeight: '350px'}}>
              <Stack direction={'column'}>
                <Box sx={{ border: '1px solid black'}} width={'100px'}>
                  <Typography variant={'h4'}>
                    2階
                  </Typography>
                </Box>
                <div className={styles.centerBox}>
                  <Typography variant={'h5'}>
                    現在の待ち時間は
                  </Typography>
                  <Typography variant={'h3'}>
                    約5分です
                  </Typography>
                </div>
              </Stack>
            </Card>
          </Stack>
        </div>
      </main>
    </>
  )
}
