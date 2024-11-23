import { Component } from '@angular/core';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'lajemacarts-presentation',
  standalone: true,
  template: `
    <div class="presentation-container">
      <div class="presentation">
        <h2>Rencontrez l' artisan derrière Lajemac-Arts</h2>
        <p>
          Après des années dans l'industrie et quelques expériences artistiques, j'ai suivi une formation technique et
          de
          dessinateur industriel. Ma passion pour le bois et la nature m'a conduit à explorer de nouvelles voies,
          jusqu'à
          devenir Artisan en Aménagement et Décoration d'intérieurs.
        </p>
        <p> Avec le temps, j'ai développé une approche unique, créant des pièces alliant bois, automatismes et
          éclairage,
          souvent à partir de matériaux recyclés. Mes créations sont inspirées par le désir de donner une seconde vie
          aux
          objets, en mêlant fonctionnalité et esthétique.</p>
        <p> Pendant la période de Covid, comme beaucoup, j'ai pris le temps de faire le point sur ma vie et mes envies.
          Ce
          moment de pause m'a permis de réaliser que je voulais démarrer une nouvelle activité, plus en accord avec mes
          passions. De là est né LagemaeArts.</p>
        <p> Je vous invite à découvrir mon univers à travers une rapide vidéo de présentation de mon atelier. Si vous
          partagez cette envie, n'hésitez pas à venir me voir ou à me contacter. C'est avec grand plaisir que je vous
          ferai partager mon amour du bois et de la nature.</p>
      </div>
      <lajemacarts-video></lajemacarts-video>
    </div>
  `,
  imports: [VideoComponent],
  styles: [`
    .presentation-container {
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }

    .presentation {
      flex: 1;
      padding-right: 20px;
    }

    .presentation h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    .presentation p {
      text-align: justify;
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    lajemacarts-video {
      flex: 1;
      max-width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})

export class PresentationComponent {

}
