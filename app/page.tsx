import Image from "next/image";
import Link from "next/link";

import styles from './styles/page.module.css'

export default function IndexPage() {
  return (
    <>
    <div className="homeWrapperOne py-5">
      <div className="container">
        <div className="row">

          <div className="col-6">
            <div className={`${styles.mainBanner} position-relative`}>
              <Image src="/images/main-banner-1.jpg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

              <div className={`${styles.mainBannerContent} position-absolute`}>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>ipad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link href={'#'} className="botton">BUY NOW</Link>
              </div>

            </div>
          </div>

          <div className={`${styles.mainBanner} position-relative col-6 d-flex`}>
            <div className="row">

              <div className="col-6 d-flex align-items-start">
                <div className={`${styles.mainBanner} position-relative`}>
                  <Image src="/images/catbanner-01.jpg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                  <div className={`${styles.smallBannerContent} position-absolute`}>
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 or<br/>$64.62/mo.</p>
                  </div>

                </div>
              </div>

              <div className="col-6 d-flex align-items-start">
                <div className={`${styles.mainBanner} position-relative`}>
                  <Image src="/images/catbanner-03.jpg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                  <div className={`${styles.smallBannerContent} position-absolute`}>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From $599.00 or<br/>$49.91/mo. for12 mon.</p>
                  </div>

                </div>
              </div>

              <div className="col-6 d-flex align-items-end">
                <div className={`${styles.mainBanner} position-relative`}>
                  <Image src="/images/catbanner-02.jpg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                  <div className={`${styles.smallBannerContent} position-absolute`}>
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band<br/>styles and colors.</p>
                  </div>

                </div>
              </div>

              <div className="col-6 d-flex align-items-end">
                <div className={`${styles.mainBanner} position-relative`}>
                  <Image src="/images/catbanner-04.jpg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                  <div className={`${styles.smallBannerContent} position-absolute`}>
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPords Max</h5>
                    <p>High-fidelity playback &<br/>ultra-low distortion</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );

}

