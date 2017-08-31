import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from './styles';
export default class Toolbar extends Component {

  constructor(props){
    super(props);
    this.left = false;
    this.right = false;
  }

  render() {

    return (
        <Header style={styles.header} androidStatusBarColor='#fa5c4f'>
          <Left style={styles.left}>
            {
              this.left ?
              <Button transparent>
                <Icon name='menu' />
              </Button>
               :
               <Button transparent>
               </Button>
            }

          </Left>
          <Body style={styles.title}>
            <Title style={{ alignSelf: 'center', fontWeight : 'bold'}}>MY ACCOUNT</Title>
          </Body>
          <Right style={styles.right}>
            {
              this.right ?
              <Button transparent>
                <Icon name='menu' />
              </Button>
              :
              <Button transparent>
              </Button>

            }

          </Right>
        </Header>
    );
  }
}
