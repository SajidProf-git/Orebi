import React from 'react'

import { NavData } from '../../dummyData/NavData';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Image from '../common/image';
import Container from '../common/Container';


const Footer = function () {
  let date = new Date();
  let crryear = date.getFullYear();
  console.log(crryear);

  return (
    <section className="py-13 bg-gray_1">
      <Container>
        <div className="">
          <div className="flex flex-col items-start justify-center gap-15">
            <div className="flex items-start gap-35.75">

              <ul className="flex flex-col items-start gap-2">
                <h4 className="mb-3 text-black_1 text-lg font-bold leading-6 uppercase">
                  menu
                </h4>

                {
                  NavData.map(function (item, index) {
                    return(
                      <li key={index}>
                        <NavLink to={item.url}>
                          {item.label}
                        </NavLink>
                      </li>
                    )
                  })
                }
              </ul>

              <ul className="flex flex-col items-start gap-2">
                <h4 className="mb-3 text-black_1 text-lg font-bold leading-6 uppercase">
                  shop
                </h4>

                {
                  [0, 1, 2, 3, 4].map(function (item, index) {
                    return(
                      <li key={index}>
                        <NavLink to={"#"}>
                          Category {item.index}
                        </NavLink>
                      </li>
                    )
                  })
                }
              </ul>

              <ul className="flex flex-col items-start gap-2">
                <h4 className="mb-3 text-black_1 text-lg font-bold leading-6 uppercase">
                  help
                </h4>

                {
                  [0, 1, 2, 3, 4].map(function (item, index) {
                    return(
                      <li key={index}>
                        <NavLink to="#">
                          Privacy Policy
                        </NavLink>
                      </li>
                    )
                  })
                }
              </ul>

              <div className="flex flex-col items-start gap-2">
                <h4 className="mb-3 w-46 text-black_1 text-lg font-bold leading-6 uppercase">
                  (052) 611-5711 company@domain.com
                </h4>

                <p className="text_gray_1 hover:text-black_1">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>

              <Image src={logo} alt="logo" />

            </div>

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-3">
                {/*{
                  Icons.links.map(function(item,index){
                    Let Icon = item.icon;
                    Return(
                      <div key={index}>
                        <NavLink to={item.url}>
                          <Icon className="text-2xl hover:text-blue-600 trans"/>
                        </NavLink>
                      </div>
                    )
                  })
                }*/}
              </div>

              <div>
                <p className="text_gray_1">
                  {crryear} Orebi Minimal eCommerce Figma Template by Adveits`
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}



export default Footer
