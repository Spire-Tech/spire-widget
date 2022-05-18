import { h } from 'preact'
import styles from './listWrapper.css'
import SmileyIcon from '../../assets/icons/smiley-icon'
import WarningIcon from '../../assets/icons/warning-icon'
import BulbIcon from '../../assets/icons/bulb-icon'
import { useNavigation } from '../../context/NavigationContext'

const features = [
  {
    icon: <SmileyIcon />,
    id: 'rate-experience',
    title: "Rate your experience",
    desc: "Let us know how we can improve"
  },
  {
    icon: <WarningIcon />,
    id: 'report-issue',
    title: "Report an issue",
    desc: "Is something wrong? Let us know."
  },
  {
    icon: <BulbIcon />,
    id: 'feature-request',
    title: "Feature request",
    desc: "Got some ideas? Tell us about it."
  },
]

const ListItem = ({ id, title, icon, desc }) => {

  const { updateActiveView } = useNavigation()

  return (
    <li onClick={() => updateActiveView(id)} role="button" class={styles.list__item}>
      <div class={styles.list__item_icon}>
        {icon}
      </div>
      <div class={styles.list__item_content}>
        <p class={styles.list__item_content_lg}>{title}</p>
        <p class={styles.list__item_content_sm}>{desc}</p>
      </div>
    </li>
  )
}

const ListWrapper = () => {
  return (
    <ul class={styles.__box_list}>
      {
        features.map(item => (
          <ListItem key={item.id} {...item} />
        ))
      }
    </ul>
  )
}

export default ListWrapper
