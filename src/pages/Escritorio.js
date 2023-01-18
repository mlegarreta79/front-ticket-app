import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { Navigate,  useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const {Title, Text} = Typography;

export const Escritorio = () => {
  const {socket} = useContext(SocketContext);
  const [usuario] = useState(getUsuarioStorage());
  const [ticket, setTicket] = useState(null);
  let navigate = useNavigate();

  useHideMenu(true);

const salir = () => {
  localStorage.clear('agente');
  localStorage.clear('escritorio');
  navigate('ingresar');

}

const siguienteTicket = () => {
  socket.emit('siguiente-ticket', usuario, (ticket)=>{
    setTicket(ticket);
  })
}

if(!usuario.agente || !usuario.escritorio) {
  return <Navigate to="/ingresar" />;
}
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right"><Button shape='round' type='primary' onClick={salir}><CloseCircleOutlined />Salir</Button></Col>
      </Row>
      <Divider />
      {
        ticket && (
          <Row>
            <Col>
              <Text>Está atendiendo el ticket número: </Text>
              <Text style={{fontSize: 30}} type="danger" >{ticket.numero}</Text>
            </Col>

          </Row>
        )  
      }
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={siguienteTicket}
            shape='round'
            type='primary'
          >
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}
