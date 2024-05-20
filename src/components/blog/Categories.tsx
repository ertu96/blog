import { slug } from 'github-slugger'
import Category from './Category'

type CategoriesProps = {
    categories: string[]
    activeCategory: string
}

const Categories = ({ categories, activeCategory }: CategoriesProps) => {
    return (
        <div className="md:px-10 md:mx-10 mx-5 mt-10 flex flex-wrap items-start border-y-2 border-solid border-dark px-0 py-4 font-medium text-dark dark:border-light dark:text-light sxl:px-20">
            {categories.map((category) => (
                <Category
                    key={category}
                    name={category}
                    link={`/categories/${category}`}
                    active={activeCategory === slug(category)}
                />
            ))}
        </div>
    )
}

export default Categories
