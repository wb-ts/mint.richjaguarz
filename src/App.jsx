import React, {useEffect, useState , useRef} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useDispatch, useSelector} from "react-redux";
// import {fetchData} from "./redux/data/dataActions";
// import {connect} from "./redux/blockchain/blockchainActions";
// import {isAndroid, isIOS} from "react-device-detect";

function AppSectionMain(props) {
    const [answered , setAnswered] = useState(0);
    const section1 = useRef(null);
    const section2 = useRef(null);

    const [walletConnected, setWalletConnected] = useState(false);
    // const [fallback, setFallback] = useState('')
    // const [mintCount, setMintCount] = useState(1)
    // const [mintPrice, setMintPrice] = useState(1)
    // const dispatch = useDispatch();
    // const blockchain = useSelector((state) => state.blockchain);
    // let connectingMobile = false
    // const minMintCount = 1;
    // const maxMintCount = 5;

    // const normalizeMintCount = (count) => count > maxMintCount ? maxMintCount
    //     : count < minMintCount ? minMintCount
    //         : count;


    // const checkMint = async () => {
    //     const isMintActive = await blockchain.smartContract.methods.isMintActive().call();
    //     const isPreSaleMintActive = await blockchain.smartContract.methods.isPreSaleMintActive().call();
    //     const mintPrice = isMintActive ? await blockchain.smartContract.methods.getMintPrice().call() / 10 ** 18
    //         : isPreSaleMintActive ? await blockchain.smartContract.methods.getPreSaleMintPrice().call() / 10 ** 18
    //             : null;

    //     return {isMintActive, isPreSaleMintActive, mintPrice}
    // }

    // const claimNFTs = async (_amount) => {
    //     const {isMintActive, isPreSaleMintActive, mintPrice} = await checkMint()

    //     const mint = isMintActive ? blockchain.smartContract.methods.mint(blockchain.account, _amount)
    //         : isPreSaleMintActive ? blockchain.smartContract.methods.preSaleMint(_amount)
    //             : null;

    //     if (mint) {
    //         setFallback('')
    //         mint.send({
    //             from: blockchain.account,
    //             value: blockchain.web3.utils.toWei((mintPrice * _amount).toString(), "ether")
    //         }).once("error", (err) => {
    //             if (err.code === -32000 || err.code === '-32000') {
    //                 setFallback('Insufficient funds, please add funds to your wallet and try again')
    //             } else {
    //                 setFallback('Sorry, something went wrong please try again ')
    //             }
    //         }).then(receipt => {
    //             console.log('success mint')
    //         });
    //     }
    // }


    // useEffect(async () => {
    //     if (blockchain.account !== "" && blockchain.smartContract !== null) {
    //         const {mintPrice} = await checkMint()
    //         setMintPrice(mintPrice)

    //         dispatch(fetchData(blockchain.account));
    //         if (blockchain.account) {
    //             setWalletConnected(true)
    //         }
    //     }
    // }, [blockchain.smartContract, dispatch]);

    // const openMobileMetamask = () => {
    //     if (connectingMobile && !walletConnected) {
    //         window.location.replace('https://metamask.app.link/dapp/mint.richjaguarz.io/')
    //     }
    // }

    // useEffect(() => {
    //     if (blockchain.errorMsg && !walletConnected && (isIOS || isAndroid)) {
    //         connectingMobile = true;
    //         openMobileMetamask();
    //     }
    // }, [blockchain.errorMsg])

    const handleClick = (index) => {
        setAnswered(index);
    }

    useEffect (()=> {
        if(answered) window.scrollTo(0, innerHeight+100);
        let selected = document.querySelectorAll('[aria-expanded*="true"]');
        let unSelected = document.querySelectorAll('[aria-expanded*="false"]');
        for(let i=0;i<selected.length;i++){
            selected[i].setAttribute("disabled","true");
            selected[i].classList.add("selected");
        }
        for(let i=0;i<unSelected.length;i++){
            unSelected[i].removeAttribute("disabled")
            unSelected[i].classList.remove("selected");
        }
    },[answered])

    return (
        <div className='App'>
            <div className='Home'>
                <div>
                    <div className="mint-container"
                    >
                        {walletConnected
                            ?
                            (
                                <div className="btn-mint-count mt-3">
                                    {/* <div className="input-number-decrement"
                                        onClick={() => setMintCount(normalizeMintCount(mintCount - 1))}
                                    >–
                                    </div>
                                    <button
                                        className="btn-mint"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            claimNFTs(mintCount)
                                        }}>Mint {mintCount} ( ETH {(+mintPrice * mintCount).toFixed(2)} )
                                    </button>
                                    <div className="input-number-increment"
                                        onClick={() => setMintCount(normalizeMintCount(mintCount + 1))}>+
                                    </div> */}
                                </div>
                            )
                            : (
                                <button id={'connectBtn'} className="btn-connect mt-3" /*onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(connect());
                                    openMobileMetamask();
                                }}*/>Connect wallet
                                </button>
                            )
                        }
                        <h3>PRE-SALE SOLD OUT</h3>
                    </div>

                    <div>
                        <p className='size1'>Let's give Jaguars</p>
                        <p className='size2'>
                            the <span className='future'>future</span> they deserve
                        </p>
                    </div>
                </div>
            </div>
            <div className='FAQ'>
                <div ref={section1} >
                    <h2 className='size2 title future' >How To Mint</h2>
                    <div>
                        <h3 className='size3'>Do you already have a metamask wallet?</h3>
                        <Accordion >
                            <Accordion.Item eventKey="1">
                                <Accordion.Header onClick={()=>{ handleClick(1)}}>Yes</Accordion.Header>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header onClick={()=>{ handleClick(2)}}>No</Accordion.Header>
                                <Accordion.Body>
                                Install Metamask On Your Phone Or Browser Through The Official Link <a href='https://metamask.io/download/' className='link'>HERE</a> and Create Your ETH Wallet
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div ref={section2}>
                {
                    answered >= 1 ?<div>
                        <h3 className='size3' >Do You Have Enough Funds On Metamask?</h3>
                        <Accordion  >
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header onClick={()=>{ handleClick(3)}}>Yes</Accordion.Header>
                                <Accordion.Body>
                                    <a href='#' className='link' onClick={(e) => {
                                    alert(e);
                                }} >Connect Wallet</a> and Buy
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" >
                                <Accordion.Header onClick={()=>{ handleClick(4)}}>No</Accordion.Header>
                                <Accordion.Body>
                                    Buy on Metamask using Credit card or apple pay OR transfer from an existing wallet
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div> : ""
                }
                </div>
                
            </div>
            
        </div>
    );
}

export default AppSectionMain;