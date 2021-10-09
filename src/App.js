import { React, Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
  card: {
    maxWidth: 545,
  },
  media: {
    height: 340,
  },
};
class App extends Component {
  render() {
    return (
      <Card style={style.card}>
        <CardActionArea>
          <CardMedia
            style={style.media}
            image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/230925ef-b26c-4a09-a76a-151c0cd3420e/dayab29-f8dde37f-6508-4ea4-b42e-323f76d26116.jpg/v1/fill/w_1024,h_576,q_75,strp/monkey_king_from_dota_2_by_artlicreative_dayab29-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMjMwOTI1ZWYtYjI2Yy00YTA5LWE3NmEtMTUxYzBjZDM0MjBlXC9kYXlhYjI5LWY4ZGRlMzdmLTY1MDgtNGVhNC1iNDJlLTMyM2Y3NmQyNjExNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wzGSJMGP8LUyN6HBCIrPiqyfwNoOoEnTNozES78ZOwg'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {this.props.title}
            </Typography>
            <Typography component='p'>{this.props.content}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary' onClick={this.props.onClickLearn}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.get('title'),
  content: state.get('content'),
});

const mapDispatchToProps = (dispatch) => ({
  onClickLearn: () => dispatch({ type: 'LEARN MORE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
