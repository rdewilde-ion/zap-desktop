import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './LndSyncing.scss'

class LndSyncing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [
        {
          title: 'No2x',
          description: 'Segwit2x is a hard fork proposal led by Barry Silbert and the NYA signers. The idea was drawn up and signed in a locked hotel room with select individuals and goes against everything that Bitcoin stands for. There is no favoritism in Bitcoin. There are no politicians. Hash power and business don\'t speak for us. Don\'t trust, verify.' // eslint-disable-line
        },
        {
          title: 'Gang',
          description: 'Segwit2x is a hard fork proposal led by Barry Silbert and the NYA. It is bullshit. Fuck that shit.'
        },
        {
          title: 'Yo',
          description: 'Segwit2x is a hard fork proposal led by Barry Silbert and the NYA. It is bullshit. Fuck that shit.'
        },
        {
          title: 'Liiiiit',
          description: 'Segwit2x is a hard fork proposal led by Barry Silbert and the NYA. It is bullshit. Fuck that shit.'
        }
      ],
      currentFact: 0
    }
  }

  componentWillMount() {
    this.props.fetchBlockHeight()
  }

  render() {
    const { fetchingBlockHeight, syncPercentage } = this.props
    const { facts, currentFact } = this.state
    const renderCurrentFact = facts[currentFact]

    return (
      <div className={styles.container}>
        <h3>zap</h3>
        <div className={styles.loading}>
          {!fetchingBlockHeight && <h4>{syncPercentage}%</h4>}
          <div className={styles.spinner} />
          <h1>syncing your lightning node to the blockchain</h1>
        </div>
        <div className={styles.facts}>
          <div className={styles.fact}>
            <h2>{renderCurrentFact.title}</h2>
            <p>{renderCurrentFact.description}</p>
          </div>
          <ul>
            {
              facts.map((fact, index) => (
                <li
                  className={`${styles.factButton} ${currentFact === index && styles.active}`}
                  key={index}
                  onClick={() => this.setState({ currentFact: index })}
                />
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

LndSyncing.propTypes = {
  fetchBlockHeight: PropTypes.func.isRequired,
  fetchingBlockHeight: PropTypes.bool.isRequired,
  syncPercentage: PropTypes.number.isRequired
}

export default LndSyncing
