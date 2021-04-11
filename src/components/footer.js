import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './emoji'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            facebook
            instagram
            twitter
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-4'>
            The Beauty Ampoule {' '}
            <Emoji emoji='💖' />
          </p>
          <article className='media center'>
            <span className='icon'>
              <a href={data.site.siteMetadata.facebook}>
                <FaFacebookSquare size='fa-2x' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.instagram}>
                <FaInstagramSquare size='fa-2x' />
              </a>
            </span>
            &nbsp;
          </article>
        </div>
      </footer>
    )}
  />
)

export default Footer
