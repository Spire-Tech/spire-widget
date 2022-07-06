import { h } from 'preact'
import styles from './listWrapper.css'
import SmileyIcon from '../../assets/icons/smiley-icon'
import WarningIcon from '../../assets/icons/warning-icon'
import BulbIcon from '../../assets/icons/bulb-icon'
import { useNavigation } from '../../context/NavigationContext'

const getIcon = (slug) => {
  switch (slug) {
    case 'feature-requests':
      return <BulbIcon />
    case 'issue-reports':
      return <WarningIcon />
    case 'satisfactions':
      return <SmileyIcon />
    default:
      throw new Error('Unknown slug')
  }
}

const ListItem = ({ id, title, slug, subTitle, businessId, widgetId }) => {

  const { updateActiveView } = useNavigation()

  return (
    <li role="menuitem" aria-haspopup="true" onClick={() => updateActiveView(slug, id, businessId, widgetId)} class={styles.list__item}>
      <div class={styles.list__item_icon}>
        {/* <img src={icon} alt={slug} /> */}
        {getIcon(slug)}
      </div>
      <div class={styles.list__item_content}>
        <p class={styles.list__item_content_lg}>{title}</p>
        <p class={styles.list__item_content_sm}>{subTitle}</p>
      </div>
    </li>
  )
}

const ListWrapper = ({ blocks, businessId, widgetId }) => {



  return (
    <ul class={styles.__box_list}>
      {
        blocks.length ? (
          blocks.map(item => (
            <ListItem key={item.id} id={item.id} title={item.title} subTitle={item.subTitle} slug={item.slug} businessId={businessId} widgetId={widgetId} />
          ))
        ) : null
      }
    </ul>
  )
}

export default ListWrapper
