import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import { Outlet } from 'react-router-dom'
import Container from '../common/Container'
import BreadCrumb from '../common/BreadCrumb'

const DashboardLayout = () => {
  return (
    <section className='py-31'>
        <Container>
            <div className='mb-31'>
                <BreadCrumb pageLabel="My Account" rootpage="Home"/>
            </div>
            <div className='flex gap-10'>
                <DashboardSidebar/>
                <Outlet/>
            </div>
        </Container>
    </section>
  )
}

export default DashboardLayout
