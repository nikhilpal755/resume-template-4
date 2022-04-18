import React from 'react'
import { useContext } from 'react'
import { BuilderContext } from '../../../../App'

import { ProfileContainer } from './ProfileContainer'

export default function Top() {
    const ctx = useContext(BuilderContext);

    const profile = ctx.getComponentData('Profile');
  return (
    <>
        <div style={{width: '100%', backgroundColor: '#142a82', color: 'whitesmoke'}}>

            <ProfileContainer
                name = {profile.name}
                profession={profile.profession}
            />
        </div>
    </>
  )
}
