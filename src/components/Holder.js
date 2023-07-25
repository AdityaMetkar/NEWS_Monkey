import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Holder extends Component {


  static defaultProps={
    country:"in",
    pagesize:10,
    category:"general"
  }

  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading:false,
      page:1,
      totalresults:0,
      api:this.props.api
    }
  }
  

  getdata=async(page)=>{
    this.props.progress(40)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${page}&pageSize=${this.props.total}`
    this.setState({loading:true})
    let data= await (await fetch(url)).json()
    this.setState({
        articles:data.articles,
        total:data.totalResults/this.props.total,
        loading:false,
        page:this.state.page+1,
        totalresults:data.totalResults
      })
    this.props.progress(100)
    console.log(data)
  }


  async componentDidMount(){
    this.getdata(1)
  }

  makeupdate=async ()=>{

    this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.state.page}&pageSize=${this.props.total}`
    let data= await (await fetch(url)).json()
    this.setState({
      articles:this.state.articles.concat(data.articles),
        loading:false,
        totalresults:data.totalResults
      })
  }


  render() {

    return (
      <>
      <div style={{margin:"0 33%",marginTop:"90px"}}><h2 className='text-center'>Top Headlines - {this.props.category}</h2></div>
      {this.state.loading?<Spinner/>:
      <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.makeupdate}
              hasMore={this.state.articles.length!==(this.state.totalresults || this.state.totalresults-1)}
              loader={<Spinner/>}>
        <div className='holder'>
          <div className='itemholder'>
            {this.state.articles.map((element,index) => {
              return <News key={index}  element={element} category={this.props.category}/>  
            }
            )}
          </div>
        </div>
      </InfiniteScroll>
      }
      </>
    )
  }
}

