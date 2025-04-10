
require('./like.css');
let jsonp = require('../util/jsonp.js');
let getFetch = require('../util/fetch.js');
import React from 'react'; 

let Like = React.createClass({
	getInitialState: function() {
		return {
			stores: [],
		}
	},

	componentDidMount: function() {
		jsonp(this.props.source, "", "callback", (data) => {
			if(data.status) {
				if(this.isMounted()) {
					this.setState({
						stores: data.data,
					});
				}
			}else {
				alert(data.msg);
				reject("get data error!")
			}
		})
		let res;
		getFetch('like').then((data) => {

				res = data;
				console.log(res);
		});
		console.log("🚀 ~ res:", res)
	},

	render: function() {
		let countId = 0;
		return (
			<div id="like">
				<p>猜你喜欢</p>
				{
					this.state.stores.map((item) => {
						return <div className="like_content" key={"like" + countId++}>
									<div className="like_link">
										<a href={ item.url }>
											<img src={ item.icon } alt=""/>
										</a>
									</div>
									<div className="like_desc">
										<span>
											{ item.desc }		
										</span>
									</div>
									<div className="like_price">
										<span>¥{ item.price }</span>
										<div><a href={ item.more }>看相似</a></div>
									</div>
								</div>
					})
				}
			</div>
		);
	}
})
		

module.exports = Like;