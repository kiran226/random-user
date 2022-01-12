import React from 'react';
import { Card,CardBody,CardTitle,CardText } from 'reactstrap';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const CardPost = ({details})=>{
    return(
        <Card>
            <CardBody className='text-center'>
                    <img height="150" width="150"
                         className='rounded-circle img-thumbnail border-danger'
                         src= {details.picture?.large}  alt=""
                    />  
                    <br/>
                    <CardTitle className='text-primary'>
                        <h1>
                            <span className='p-2' >{details.name?.title}</span>
                            <span>{details.name?.first}</span>
                            <span>{details.name?.last}</span>
                        </h1>
                    </CardTitle>
                    <CardText>
                        <FaMapMarkedAlt />
                        {details.location?.city}<br/>
                        {details.phone}
                    </CardText>
                
            </CardBody>
        </Card>
    )
}
export default CardPost;