import { getPagesArray } from "../../../utils/pages"

const Pagination = ({totalPages, page, changePage}) => {

  let pagesArray = getPagesArray(totalPages)

   return (
    <div className='page__wrapper'>
      {pagesArray.map(p =>
        <span 
        onClick={() => changePage(p)}
        key={p}
        className={page === p ? 'page page__current' : 'page'}
        style={{color:'var(--text-color)',
        transition: 'color 500ms linear'}}>
          {p}
        </span>
      )}
    </div>
   )
}

export default Pagination;
