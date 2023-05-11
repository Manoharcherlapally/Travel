import React from 'react'
import service1 from '../Pages/ServiceImages/pexels-photo-10432964.jpeg'
import service2 from '../Pages/ServiceImages/pexels-photo-12475522.jpeg'
import service3 from '../Pages/ServiceImages/pexels-photo-12527212.jpeg'
import service4 from '../Pages/ServiceImages/pexels-photo-13959591.jpeg'
import service5 from '../Pages/ServiceImages/taj2.jpg'
import service6 from '../Pages/ServiceImages/pexels-photo-3520942.jpeg'
import service7 from '../Pages/ServiceImages/pexels-photo-3574440.jpeg'
import service8 from '../Pages/ServiceImages/pexels-photo-3672388.jpeg'
import service9 from '../Pages/ServiceImages/pexels-photo-3732475.jpeg'
import service10 from '../Pages/ServiceImages/pexels-photo-3779008.jpeg'
import service11 from '../Pages/ServiceImages/pexels-photo-4134644.jpeg'
import service12 from '../Pages/ServiceImages/pexels-photo-6040182.jpeg'
import service13 from '../Pages/ServiceImages/pexels-photo-9371002.jpeg'
import service14 from '../Pages/ServiceImages/pexels-photo-9902399.jpeg'
import Carditem from '../Carditem'

export default function Services() {
  return (
    <div className='container-fluid'>
    <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src={service1}
                    text='Tunganath Temple'
                    />
                     <Carditem
                    src={service2}
                    text='Meenakshi Amman Temple'
                    />

                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src={service3}
                    text='Sri Harmandir Sahib'
                    />
                     <Carditem
                    src={service4}
                    text='Albert Hall Museum'
                    />
                     <Carditem
                    src={service5}
                    text='Taj Mahal'
                    />

                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src={service6}
                    text='Dakshineswar Kali Temple'
                    />
                     <Carditem
                    src={service7}
                    text=''
                    />

                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src={service8}
                    text='Humayuns Tomb'
                    label='Mystery'
                    path='/services'
                    />
                     <Carditem
                    src={service9}
                    text=''
                    />
                     <Carditem
                    src={service10}
                    text=''
                    />

                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src={service11}
                    text='Mysore Palace'
                    />
                     <Carditem
                    src={service12}
                    text=''
                    />

                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src={service13}
                    text='Indian Gate'
                    />
                     <Carditem
                    src={service14}
                    text='Hawa Mahal'
                    />
                     <Carditem
                    src={service6}
                    text='Ride through Sahara Desert on a guided camel tour.'
                    label='Adventure'
                    path='/sign-up'
                    />

                </ul>



            </div>
            </div>
   </div>
  )
}
