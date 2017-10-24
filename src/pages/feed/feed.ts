import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Exemplo de Feed",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.",
    qtd_likes: "12 Likes",
    qtd_comments: "4",
    time_comments: "11h ago"

  }

  public lista_filmes = new Array<any>(); // criei uma variavel que recebe um array qualquer coisa para virar um objeto javascript 

  public nome_usuario: string = "Exemplo de Feed"; //exemplo de criação de variávels

  constructor(
    public navCtrl: NavController,
    private movieProvider: MovieProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatesMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
