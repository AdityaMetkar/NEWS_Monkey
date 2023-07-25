import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Holder extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Hugh Son",
      "title": "Dimon says private equity giants are 'dancing in the streets' over tougher bank rules - CNBC",
      "description": "Banks face requirements to hold more capital as a cushion against risky activities from both U.S. and international regulators.",
      "url": "https://www.cnbc.com/2023/07/14/dimon-apollo-blackstone-tougher-bank-rules.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107123065-1663870905474-gettyimages-1243428627-senate_bankers350_092222.jpeg?v=1689350604&w=1920&h=1080",
      "publishedAt": "2023-07-14T16:03:24Z",
      "content": "JPMorgan Chase executives warned Friday that tougher regulations in the wake of a trio of bank failures this year would raise costs for consumers and businesses, while forcing lenders to exit some bu… [+2226 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Emilia David",
      "title": "China mandates that AI must follow “core values of socialism” - The Verge",
      "description": "China’s new generative AI policy promotes enterprise development but puts restrictions on public use, softening draft rules from April.",
      "url": "https://www.theverge.com/2023/7/14/23794974/china-generative-ai-regulations-alibaba-baidu",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/ek4HX_x0U1RCUWAlIIdz5gfH3GQ=/0x0:7008x4672/1200x628/filters:focal(3504x2336:3505x2337)/cdn.vox-cdn.com/uploads/chorus_asset/file/24788422/1376283497.jpg",
      "publishedAt": "2023-07-14T15:49:08Z",
      "content": "China mandates that AI must follow core values of socialism\r\nChina mandates that AI must follow core values of socialism\r\n / China wants generative AI services to adhere to socialist principles while… [+2766 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Spencer Kimball",
      "title": "FDA says soda sweetener aspartame is safe, disagreeing with WHO finding on possible cancer link - CNBC",
      "description": "The FDA said the studies that World Health Organization experts relied on to make this conclusion had \"significant shortcomings.\"",
      "url": "https://www.cnbc.com/2023/07/14/fda-says-aspartame-is-safe-disagrees-with-who-on-possible-cancer-link.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106340729-1579203822452gettyimages-1137877381.jpeg?v=1689349453&w=1920&h=1080",
      "publishedAt": "2023-07-14T15:44:13Z",
      "content": "The U.S. Food and Drug Administration disagrees with a World Health Organization finding that the widely used soda sweetener aspartame possibly causes cancer in humans, saying the studies used to rea… [+3619 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "David Benoit",
      "title": "Citigroup Profit Falls 36% - The Wall Street Journal",
      "description": "Live updates of what's moving stocks and other markets, including the Dow Jones Industrial Average, S&P 500 and Nasdaq Composite",
      "url": "https://www.wsj.com/livecoverage/stock-market-today-earnings-07-14-2023",
      "urlToImage": "https://images.wsj.net/im-816887/social",
      "publishedAt": "2023-07-14T15:39:00Z",
      "content": "Citigroup had a rocky second quarter. Here are the highlights: Profit dropped 36% to $2.92 billion, or $1.33 per share. Analysts had expected $1.31.\r\n Revenue slipped 1% to $19.44 billion. Analysts h… [+1089 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Niket Nishant, Nupur Anand",
      "title": "JPMorgan's profit up on interest income boost from First Republic deal - Reuters.com",
      "description": "JPMorgan Chase <a href=\"https://www.reuters.com/markets/companies/JPM.N\" target=\"_blank\">(JPM.N)</a> beat Wall Street estimates for second-quarter profit even as its chief Jamie Dimon cautioned about unprecedented economic risks.",
      "url": "https://www.reuters.com/business/finance/jpmorgan-second-quarter-profit-rises-higher-interest-income-2023-07-14/",
      "urlToImage": "https://www.reuters.com/resizer/B5wKlczfccCkyljxS0FXgJMSV_8=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/X2KX64AQMVKYVDWQYLZPIXIU6U.jpg",
      "publishedAt": "2023-07-14T15:34:00Z",
      "content": "July 14 (Reuters) - JPMorgan Chase (JPM.N) beat Wall Street estimates for second-quarter profit even as its chief Jamie Dimon cautioned about unprecedented economic risks.\r\nThe largest U.S. lender's … [+4011 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Scott Cohn",
      "title": "These are America’s 10 worst states to live and work in for 2023, and there's a big surprise at the very bottom - CNBC",
      "description": "Quality of life is a major factor in where Americans choose to work, live and make major purchases including homes. These states are the nation's worst.",
      "url": "https://www.cnbc.com/2023/07/14/these-are-americas-10-worst-states-to-live-and-work-in.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107264104-1687968260262-gettyimages-1248387547-US-NEWS-FLA-WOKE-ACT-LAWSUITS-MI.jpeg?v=1689347785&w=1920&h=1080",
      "publishedAt": "2023-07-14T15:16:25Z",
      "content": "With nearly twice as many job openings nationwide as there are workers available to fill them, companies are setting up shop where the workers are.\r\nEach year, as part of our overall assessment of st… [+10963 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Lisa Baertlein",
      "title": "UPS strike could be costliest in US in a century, study says - Reuters",
      "description": "A threatened U.S. strike at United Parcel Service <a href=\"https://www.reuters.com/markets/companies/UPS.N\" target=\"_blank\">(UPS.N)</a> could be \"one of the costliest in at least a century,\" topping $7 billion for a 10-day work stoppage, a think tank speciali…",
      "url": "https://www.reuters.com/world/us/potential-ups-strike-could-cost-customers-over-4-bln-report-2023-07-13/",
      "urlToImage": "https://www.reuters.com/resizer/w2LBPnbbT8BgkvCA-7xuiJBRxss=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y5IQ7E3TTRP3RE5KDATNEK6ZBE.jpg",
      "publishedAt": "2023-07-14T14:46:00Z",
      "content": "July 13 (Reuters) - A threatened U.S. strike at United Parcel Service (UPS.N) could be \"one of the costliest in at least a century,\" topping $7 billion for a 10-day work stoppage, a think tank specia… [+3218 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Saqib Ahmed",
      "title": "Tumbling US dollar a boon to risk assets across the globe - Reuters.com",
      "description": "Cooling U.S. inflation is accelerating a decline in the dollar, and risk assets around the world stand to benefit.",
      "url": "https://www.reuters.com/markets/currencies/tumbling-us-dollar-boon-risk-assets-across-globe-2023-07-14/",
      "urlToImage": "https://www.reuters.com/resizer/h2cIom_yu8DfpugkaX7PVtHrRak=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KSUIXF3ZG5PXPDEWMJVTRXNAGQ.jpg",
      "publishedAt": "2023-07-14T14:42:04Z",
      "content": "NEW YORK, July 14 (Reuters) - Cooling U.S. inflation is accelerating a decline in the dollar, and risk assets around the world stand to benefit.\r\nThe dollar is down nearly 13% against a basket of cur… [+4824 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "MICHELLE CHAPMAN",
      "title": "China's Shein hit with lawsuit citing RICO violations, a law originally used against organized crime - The Associated Press",
      "description": "China’s fast fashion retailer Shein is facing a lawsuit that claims the clothing maker’s copyright infringement is so aggressive, it amounts to racketeering. The filing this week claims that Shein is in violation of the Racketeer Influenced and Corrupt Organi…",
      "url": "https://apnews.com/article/shein-fast-fashion-rico-lawsuit-designer-retail-f4ff4b10a29f65faaa65165a1c900484",
      "urlToImage": "https://dims.apnews.com/dims4/default/990fa63/2147483647/strip/true/crop/5760x3240+0+300/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdc%2F51%2Fb4ead7bd1e137b8b7fe4d4da0ddb%2F4d79396079124540b749d96545ee5e47",
      "publishedAt": "2023-07-14T14:30:00Z",
      "content": "Chinas fast fashion retailer Shein is facing a lawsuit that claims the clothing makers copyright infringement is so aggressive, it amounts to racketeering.\r\nThe filing this week claims that Shein is … [+2694 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Highly shorted Nikola jumps as retail army scoops up shares after BayoTech deal - Reuters.com",
      "description": "Shares of Nikola Corp <a href=\"https://www.reuters.com/markets/companies/NKLA.O\" target=\"_blank\">(NKLA.O)</a> jumped 14% on Friday, a day after a short squeeze sent the electric-truck maker's shares soaring in their busiest trading session on record.",
      "url": "https://www.reuters.com/business/autos-transportation/highly-shorted-nikola-jumps-retail-army-scoops-up-shares-after-bayotech-deal-2023-07-14/",
      "urlToImage": "https://www.reuters.com/resizer/V0Fs4fJpa3H8FxzFJaupSnOJdBQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2R5FFJ3I5ZKZ3A5HPB6A5AYJYU.jpg",
      "publishedAt": "2023-07-14T14:25:00Z",
      "content": "July 14 (Reuters) - Shares of Nikola Corp (NKLA.O) jumped 14% on Friday, a day after a short squeeze sent the electric-truck maker's shares soaring in their busiest trading session on record.\r\nThe st… [+1604 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Tom Westbrook, Rae Wee",
      "title": "Bitcoin near 13-month high as investors welcome Ripple ruling - Reuters",
      "description": "Bitcoin was hovering near its highest so far this year on Friday after crypto investors took encouragement from a legal victory in which the cryptocurrency XRP was ruled not to be a security.",
      "url": "https://www.reuters.com/business/finance/signs-crypto-winter-ending-regulatory-fog-begins-lift-2023-07-14/",
      "urlToImage": "https://www.reuters.com/resizer/__vssVD71SkvHJudo21U669yN2Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2MX2YIYFB5MCLB2HI7BF5RDYPU.jpg",
      "publishedAt": "2023-07-14T14:16:00Z",
      "content": "SINGAPORE, July 14 (Reuters) - Bitcoin was hovering near its highest so far this year on Friday after crypto investors took encouragement from a legal victory in which the cryptocurrency XRP was rule… [+3487 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Ryan Ermey",
      "title": "Just 65% of Americans always tip at restaurants—etiquette experts on what we get wrong about tipping - CNBC",
      "description": "A recent survey shows Americans are all over the map when it comes to who they tip. Etiquette experts clarify the rules for everyone.",
      "url": "https://www.cnbc.com/2023/07/14/where-americans-should-tip-vs-where-they-actually-do.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107271390-1689277663655-gettyimages-699091195-is09b39ew.jpeg?v=1689344118&w=1920&h=1080",
      "publishedAt": "2023-07-14T14:15:18Z",
      "content": "Before you engage the seemingly endless debate around when and how much to tip, it's worth remembering that there's no actual rulebook.\r\nSure, there are some people barbers, cab drivers who etiquette… [+4761 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Greg Robb",
      "title": "U.S. consumer sentiment soars in July to highest level since September 2021 - MarketWatch",
      "description": "Inflation expectations tick higher",
      "url": "https://www.marketwatch.com/story/u-s-consumer-sentiment-soars-in-july-to-highest-level-since-september-2021-67cc8769",
      "urlToImage": "https://images.mktw.net/im-817022/social",
      "publishedAt": "2023-07-14T14:10:00Z",
      "content": "The numbers: The University of Michigans gauge of consumer sentiment rose to a preliminary July reading of 72.6 from a June reading of 64.4. It is the largest gain since December 2005. Sentiment is a… [+1278 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Financials are trading at a really attractive multiple right now, says SoFi's Liz Young - CNBC Television",
      "description": "Liz Young, SoFi head of investment strategy, joins 'Squawk Box' to react to the latest bank earnings, latest market trends, and more.",
      "url": "https://www.youtube.com/watch?v=CIFtioEgWSg",
      "urlToImage": "https://i.ytimg.com/vi/CIFtioEgWSg/maxresdefault.jpg",
      "publishedAt": "2023-07-14T13:56:41Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Slower consumer spending hits Nokia, Ericsson - Reuters",
      "description": null,
      "url": "https://www.youtube.com/watch?v=1rbiXibq9JY",
      "urlToImage": null,
      "publishedAt": "2023-07-14T13:53:28Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Vishesh Raisinghani",
      "title": "Costco just planted the 'death star' on Bud Light cases — a sign that it won't restock the beer amid controversy, plummeting sales. Wild speculation or 1 more devastating blow to the brand? - Yahoo Finance",
      "description": "What's next for the embattled brand?",
      "url": "https://finance.yahoo.com/news/costco-just-planted-death-star-133000145.html",
      "urlToImage": "https://media.zenfs.com/en/moneywise_327/72f81edf5a3e81f23f42cd333fc19b21",
      "publishedAt": "2023-07-14T13:30:00Z",
      "content": "Costco just planted the 'death star' on Bud Light cases a sign that it won't restock the beer amid controversy, plummeting sales. Wild speculation or 1 more devastating blow to the brand?\r\nShoppers a… [+3549 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "UnitedHealth earnings beat estimates on both top and bottom lines - CNBC Television",
      "description": "CNBC's Bertha Coombs reports on UnitedHealth earnings. For access to live and exclusive video from CNBC subscribe to CNBC PRO: https://cnb.cx/2NGeIvi » Subsc...",
      "url": "https://www.youtube.com/watch?v=aXRChxsbv18",
      "urlToImage": "https://i.ytimg.com/vi/aXRChxsbv18/maxresdefault.jpg",
      "publishedAt": "2023-07-14T12:31:40Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Arjun Kharpal",
      "title": "'I think we will win': Coinbase buoyed in case against SEC after landmark Ripple XRP decision - CNBC",
      "description": "The SEC sued Coinbase in June, alleging it was operating an unregistered exchange and broker. The Ripple ruling has given Coinbase new confidence it can win.",
      "url": "https://www.cnbc.com/2023/07/14/coinbase-buoyed-in-case-against-sec-after-landmark-ripple-xrp-decision.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107257355-1686829412999-gettyimages-1258703239-PGONCHAR_9066.jpeg?v=1689337308&w=1920&h=1080",
      "publishedAt": "2023-07-14T12:21:48Z",
      "content": "Coinbase's arguments in its legal case against the U.S. Securities and Exchange Commission have been strengthened after a key court ruling went partially in favour of cryptocurrency firm Ripple, the … [+3533 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Japan space agency rocket engine explodes during test - WION",
      "description": null,
      "url": "https://www.youtube.com/watch?v=RThdQ_oP1Is",
      "urlToImage": null,
      "publishedAt": "2023-07-14T12:10:52Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "Lilly.com"
      },
      "author": null,
      "title": "Lilly to Acquire Versanis to Improve Patient Outcomes in Cardiometabolic Diseases | Eli Lilly and Company - Investors | Eli Lilly and Company",
      "description": "The Investor Relations website contains information about Eli Lilly and Company's business for stockholders, potential investors, and financial analysts.",
      "url": "https://investor.lilly.com/news-releases/news-release-details/lilly-acquire-versanis-improve-patient-outcomes-cardiometabolic",
      "urlToImage": "https://investor.lilly.com/static-files/414b590d-5fd8-4d74-bb91-284a3d77fb98",
      "publishedAt": "2023-07-14T12:03:19Z",
      "content": "INDIANAPOLIS\r\n and NEW YORK\r\n, July 14, 2023\r\n /PRNewswire/ -- Eli Lilly and Company\r\n (NYSE: LLY) and Versanis Bio today announced a definitive agreement for Lilly\r\n to acquire Versanis, a private c… [+7065 chars]"
    }
]

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
    console.log(data.articles,this.state.articles)
  }


  render() {

    return (
      <>
      <div className='text-center my-4'><h2>Top Headlines - {this.props.category}</h2></div>
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

