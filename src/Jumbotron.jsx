import React from 'react';
import { Jumbotron } from 'reactstrap';
import Button from '@material-ui/core/Button';

const Landing = (props) => {
  return (
    <div>
      <Jumbotron align="center">
        <h1 className="display-3">Pondok IT</h1>
        <p>Tempat belajar Al-Qur'an dan Programming dengan Seru!</p>
        <p className="lead">
          <Button variant="contained" color="secondary">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;