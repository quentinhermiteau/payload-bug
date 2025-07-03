import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'
import { SeedButton } from './SeedButton'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Bienvenue sur RATP Group!</h4>
      </Banner>
      <div className={`${baseClass}__content`}>
        <p>Bienvenue sur votre tableau de bord.</p>
        <p>
          Vous pouvez commencer à gérer votre contenu en utilisant le panneau de gauche ou en
          cliquant sur les collections ci-dessous.
        </p>
        {process.env.env === 'local' && (
          <p>
            <SeedButton />
          </p>
        )}
      </div>
    </div>
  )
}

export default BeforeDashboard
