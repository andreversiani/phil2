import phil1 from './assets/phil1.jpg'
import phil2 from './assets/phil2.jpg'
import phil3 from './assets/phil3.jpg'
import phil4 from './assets/phil4.jpg'
import phil5 from './assets/phil5.jpg'
import phil6 from './assets/phil6.jpg'
import phil_face from './assets/phil_face.jpeg'
import phil_real_face2 from './assets/phil_real_face2.png'

import './App.css'

function App() {
  return (
    <>
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Philip II da Macedônia</h1>
        <img src={phil_face}></img>
        </div>
        <div>Philip II da Macedônia foi rei da Macedônia de 359 a 336 a.C. e conquistou diversos territórios deixando seu legado para seu filho, Alexandre o Grande.</div>

        <h2>Moedas em sua homenagem</h2>
        <a target="_blank">
          <img src={phil1} />
          <img src={phil2} />
          <img src={phil3} />
          <img src={phil4} />
          <img src={phil5} />
          <img src={phil6} />
        </a>
      </div>
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Philip I da SYDLE</h1>
        <img src={phil_real_face2} style={{ borderRadius: '50%' }}></img>
        </div>
        <div>Phillip I da SYDLE é um Engenheiro da SYDLE que obteve sua primeira conquista, seu primeiro ano.</div>
        <h2>Moedas em sua homenagem</h2>
        <div> 
          Em breve..
        </div>
      </div>
    </>
  )
}

export default App
