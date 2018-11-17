import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Jinyoung Joel Park</h1>
    <p>Hello. I'm a product designer and interested in learning code such as React. This is my first website using with React code.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch the video</Link>
  </Layout>
)


export default IndexPage
