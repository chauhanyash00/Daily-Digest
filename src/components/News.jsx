import React , {useState , useEffect} from 'react'
import NewsItam from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

function News(props) {

    const[articles , setArticles] = useState([]);
    const[loding , setLoding] = useState(false);
    const[page , setPage] = useState(1);
    const[totalResults , serTotalResults] = useState(0);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpdateNews =  async (page) => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.catrgory}&pageSize=${props.pageSize}&page=${page}`;
        setLoding(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles);
        serTotalResults(parsedData.totalResults);
        setLoding(false);
        props.setProgress(100);
    }

    useEffect(() => {
        UpdateNews();
        document.title=` ${capitalizeFirstLetter(props.catrgory)}-Daily Spark`
    }, [])

    const fetchMoreData = async (page) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=f815dd45cc694d34896bc78890e29151&category=${props.catrgory}&pageSize=${props.pageSize}&page=${page}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json(); 
        console.log(parsedData);
        setArticles(parsedData.articles.concat(articles));
        serTotalResults(parsedData.totalResults);
        setLoding(false); 
      };

  return (
    <div className='container news-headline'>
                {/* This Is News Components */}
                <h1 className='text-center'>Today's Top Headlines  About : {capitalizeFirstLetter(props.catrgory)} </h1>
                {/* {state.loading && <Loader />} */}
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
            >   
            <div className="container">
            <div className="row my-3">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItam title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author=
                                {element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    }
                    )}
                </div>
            </div>
        </InfiniteScroll>

            </div>
  )
}

News. defaultProps = {
    pageSize: 6,
    country: "us",
    category: "science"
  }

  News. propType = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

export default News
