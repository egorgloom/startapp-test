import { FC, useState } from 'react';

import cl from './Header.module.scss';

import { IoLogoAngular } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../Slices/apiSlice';


const Header: FC = () => {

  const [search, setSearch] = useState<string>('');

  const { data = [] } = useGetProductsQuery('')

  const handleSearch = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <header className={cl.header}>
      <IoLogoAngular className={cl.logo} />
      <div className={cl.search}>
      <input
        type="text"
        className={cl.input}
        placeholder="Search...."
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <span>
        {search && <div className={cl.searchBlock}>
          {handleSearch.length ?
            handleSearch.map((item) =>
              <Link to={`products/${item.id}`}
                className={cl.item}
                key={item.id}
              >
                <img src={item.image} alt={item.title} />
                <h5>{item.title}</h5>
              </Link>
            )
            : <div>no result</div>
          }
        </div>
        }
      </span>
      </div>
      <Link to='cart'>
        <RiShoppingCartLine className={cl.card} />
      </Link>
    </header>
  );
};

export default Header;