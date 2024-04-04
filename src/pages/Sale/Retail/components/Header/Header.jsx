import {
  memo, useRef,
} from 'react';
import {
  Dropdown, Nav,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { translate } from '~/helpers/utils';
import { SearchProductSection } from '../SearchProductSection';

SwiperCore.use([Navigation]);

export const Header = memo(
  ({
    orderTab,
    handleAddOrderTab,
    handleRemoveOrderTab,
    handleAddProductToOrder,
    handleSelectBillInfo,
    handlePrintTmp,
  }) => {
    const { profileUser } = useSelector((store) => store.user);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
      <>
        <header className="sale-header">
          <div className="header-left">
            <div className="col-left-control">
              <SearchProductSection
                handleSelectBillInfo={handleSelectBillInfo}
                handleAddProductToOrder={handleAddProductToOrder}
              />
            </div>
            <div className="cart-tabs">
              <Nav>
                <Swiper
                  spaceBetween={0}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                >
                  {orderTab.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Nav.Item>
                        <Nav.Link eventKey={item}>
                          {item.replace(
                            'tab-',
                            `${translate('sale.header.order-tab-name')} `,
                          )}
                          <span
                            className="btn-close-tab"
                            onClick={() => handleRemoveOrderTab(item)}
                          >
                            {translate('sale.header.btn-delete-order-tab')}
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  ref={navigationNextRef}
                  className="swiper-button-next swiper-nav-ctrl"
                >
                  <i className="simple-icon-arrow-right" />
                </div>
                <div
                  ref={navigationPrevRef}
                  className="swiper-button-prev swiper-nav-ctrl"
                >
                  <i className="simple-icon-arrow-left" />
                </div>
              </Nav>
              <span className="btn-add-tabs" onClick={handleAddOrderTab}>
                {translate('sale.header.btn-add-order-tab')}
              </span>
            </div>
          </div>
          <div className="header-right">
            <ul className="header-nav">
              <li onClick={handlePrintTmp}>
                <i className="simple-icon-printer" />
              </li>
              <li>
                <span className="user-name">{profileUser?.data?.name}</span>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i className="simple-icon-menu" />
                  </Dropdown.Toggle>
                </Dropdown>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  },
);
