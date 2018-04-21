
let jsstyle = {
    wrapper:{
        position:"relative",
        width:"451px",
        height:"300px",
        background:"black",
        border:"2px #5F4125 inset",
    },
    screenarea:{
        position:"relative",
        overflow:"hidden",
        width:"100%",
        height:"256px",
    },
    noticescreen:{
        position:"relative",
        overflow:"hidden",
        width:"100%",
        height:"100%",
        boxSizing:"border-box",
        textAlign:"center"
    },
        noticebox:{
            position:"relative",
            margin:"30px auto 0 auto",
            width:"270px",
            height:"160px",
            background:"#FAFAFA",
            border:"5px #EBDECE inset",
            borderRadius:"5px"
        },
        noticetext:{
            display:"block",
            margin:"0 auto",
            width:"90%",
            height:"auto",
            color:"#995B42",
            fontSize:"20px",
            lineHeight:"150%",
            fontWeight:"bold"
        },
        noticebutton:{
            display:"block",
            margin:"15px auto 0 auto",
            width:"90%",
            height:"45px",
            background:"linear-gradient(#ffffff, #A0A0A0)",
            border:"1px gray solid",
            borderRadius:"5px",
            textDecoration:"none",
            color:"black",
            fontSize:"30px",
            fontWeight:"bold",
            cursor:"pointer"
        },
    titlescreen:{
        position:"relative",
        overflow:"hidden",
        width:"100%",
        height:"100%",
        backgroundPosition:"50% 50%",
        backgroundSize:"cover",
        boxSizing:"border-box",
        opacity:"0.01",
        transition:"opacity 2s linear, height 0s linear 2s",
        textAlign:"center"
    },
        title:{
            display:"inline-block",
            position:"relative",
            margin:"30px auto 0 auto",
            padding:"5px 20px",
            height:"40px",
            backgroundColor:"rgba(0,0,0,0.7)",
            color:"white",
            fontWeight:"bold",
            fontSize:"30px",
            lineHeight:"40px",
            cursor:"default"
        },
        start:{
            display:"block",
            position:"relative",
            overflow:"hidden",
            margin:"90px auto",
            width:"50%",
            height:"0",
            background:"linear-gradient(#ffffff, #A0A0A0)",
            borderRadius:"5px",
            boxSizing:"borderBox",
            transition:"height 0s linear 2s",
            textDecoration:"none",
            color:"black",
            fontSize:"30px",
            fontWeight:"bold",
            lineHeight:"50px",
            cursor:"pointer"
        },
    mainscreen:{
        position:"relative",
        width:"100%",
        height:"0",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"50% 50%",
        backgroundSize:"cover",
        transition:"height 0s linear 2s"
    },
        cha1:{
            position:"relative",
            width:"100%",
            height:"100%",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"50% 50%",
            backgroundSize:"contain"
        },
        cha2:{
            position:"relative",
            width:"100%",
            height:"100%",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"50% 50%",
            backgroundSize:"contain"
        },
        cha3:{
            position:"relative",
            paddingTop:"5px",
            width:"100%",
            height:"100%",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"50% 50%",
            backgroundSize:"contain",
            boxSizing:"border-box"
        },
        selectframe:{
            overflow:"hidden",
            position:"relative",
            visibility:"hidden",
            margin:"0 auto",
            width:"250px",
            height:"135px",
            background:"rgba(113,82,35,0.7)",
            border:"5px #EBDECE inset",
            borderRadius:"5px"
        },
            selecthead:{
                width:"100%",
                height:"15px",
                background:"rgba(0,0,0,0.6)",
                color:"yellow",
                fontSize:"12px",
                fontWeight:"bold",
                lineHeight:"15px",
                textAlign:"center"
            },
            select:{
                position:"relative",
                padding:"0 5px",
                width:"100%",
                height:"30px",
                boxSizing:"borderBox",
                color:"white",
                fontWeight:"bold",
                fontSize:"20px",
                lineHeight:"30px"
            },
                select_over:{
                    backgroundColor:'skyblue',
                    color:'black',
                    cursor:'pointer'
                },
                select_out:{
                    backgroundColor:'transparent',
                    color:'white',
                    cursor:'default'
                },
        dialog_nameframe:{
            display:"inline-block",
            overflow:"hidden",
            marginTop:"29px",
            padding:"0 9px 2px 8px",
            width:"auto",
            minWidth:"100px",
            height:"28px",
            background:"rgba(60,64,153,0.7)",
            borderTop:"1px white solid",
            borderRight:"1px white solid",
            borderTopRightRadius:"10px",
            boxSizing:"border-box",
            color:"white",
            fontWeight:"bold",
            fontSize:"16px",
            lineHeight:"27px"
        },
            dialog_name:{
                display:"none"
            },
        dialog_textframe:{
            padding:"0 5px",
            width:"100%",
            height:"48px",
            background:"rgba(0,0,0,0.7)",
            borderTop:"1px white solid",
            boxSizing:"border-box",
            color:"white",
            fontSize:"15px",
            lineHeight:"23px"
        },
        dialog_firsttextframe:{
            display:"inline-block",
            overflow:"hidden",
            width:"0",
            height:"0",
            transition:"width 1.5s steps(30,end) 2s",
            whiteSpace:"nowrap"
        },
        dialog_text:{
            overflow:"hidden",
            width:"0",
            height:"0",
            transition:"width 1.5s steps(30,end)",
            whiteSpace:"nowrap"
        },
    youtube:{
        position:"relative",
        clear:"both",
        float:"left",
        width:"101px",
        height:"44px",
        border:"0",
        boxSizing:"border-box"
    },
    buttonframe:{
        display:"block",
        position:"relative",
        float:"left",
        width:"350px",
        height:"44px",
        background:"#A0A0A0",
        textAlign:"center"
    },
    progress:{
        display:"none",
        width:"100%",
        height:"100%",
        background:"linear-gradient(#ffffff, #A0A0A0)",
        border:"1px gray solid",
        fontSize:"30px",
        fontWeight:"bold",
        lineHeight:"44px",
        color:"black",
        textDecoration:"none",
        cursor:"pointer"
    }
}
