import React from 'react';
import { NavLink } from 'react-router-dom';

import camperMain from 'images/camper-main.jpg';
import {
  Header,
  ContentContainer,
  ImgLinkContainer,
  Img,
  CatalogButton,
  Reason,
  ReasonHeader,
  MotoContainer,
  MotoStart,
  MotoEnd,
} from './PageStyles';

const Home = () => {
  return (
    <section>
      <Header>Seven Reasons to Choose Us!</Header>
      <ContentContainer>
        <ImgLinkContainer>
          <Img
            src={camperMain}
            alt="camper against the backdrop of forest and snow peaks mountains"
          />
          <NavLink to="/catalog">
            <CatalogButton type="button">Catalog</CatalogButton>
          </NavLink>
          <MotoContainer>
            <MotoStart>Celebrate Your Dreams Today, </MotoStart>
            <MotoEnd> Seize the Adventure Now!</MotoEnd>
          </MotoContainer>
        </ImgLinkContainer>
        <ul>
          <Reason>
            <ReasonHeader>Wide Range of Campers </ReasonHeader>
            <p>
              We offer a diverse selection of campers to suit every traveler's
              needs, from cozy vans perfect for couples to spacious
              fully-integrated models ideal for families and groups of friends.
            </p>
          </Reason>
          <Reason>
            <ReasonHeader>Top-Quality Equipment </ReasonHeader>
            <p>
              Our campers are equipped with modern amenities to ensure a
              comfortable and convenient travel experience. From fully-equipped
              kitchens to luxurious bathrooms, we provide everything you need
              for a memorable journey.
            </p>
          </Reason>
          <Reason>
            <ReasonHeader>Reasonable and Well-Maintained </ReasonHeader>
            <p>
              We take pride in maintaining our campers to the highest standards
              of safety and cleanliness. Each vehicle undergoes regular
              inspections and maintenance checks to ensure reasonability on the
              road.
            </p>
          </Reason>
          <Reason>
            <ReasonHeader>Flexible Rental Options </ReasonHeader>
            <p>
              Whether you're planning a weekend getaway or a month-long
              adventure, we offer flexible rental options to accommodate your
              travel plans. Choose from daily, weekly, or monthly rental periods
              to suit your schedule.
            </p>
          </Reason>
          <Reason>
            <ReasonHeader>Exceptional Customer Service </ReasonHeader>
            <p>
              Our team is dedicated to providing exceptional customer service
              from start to finish. We're here to assist you every step of the
              way, from selecting the perfect camper to providing support during
              your trip.
            </p>
          </Reason>
          <Reason>
            <ReasonHeader>Affordable Rates </ReasonHeader>
            <p>
              We believe that unforgettable travel experiences should be
              accessible to everyone. That's why we offer competitive rates and
              transparent pricing with no hidden fees, so you can enjoy your
              journey without breaking the bank.
            </p>
          </Reason>
          <Reason>
            <ReasonHeader>Explore Ukraine </ReasonHeader>
            <p>
              With our campers, you have the freedom to explore Ukraine at your
              own pace. Whether you're drawn to the stunning landscapes of the
              Carpathian Mountains, the vibrant culture of Lviv, or the historic
              charm of Kyiv, our campers provide the ultimate flexibility to
              discover the beauty of Ukraine.
            </p>
          </Reason>
        </ul>
      </ContentContainer>
    </section>
  );
};

export default Home;
