import { Stack, Typography } from '@mui/material'
import classes from './ArticlePage.module.scss'
import profileicon from './images/profileicon.svg'
import image1 from './images/image1.png'
import image2 from './images/image2.png'

function ArticlePage() {
    return (
        <div className={classes.container}>
            <Stack
                direction='column'
                spacing={4}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div>
                    <Typography className={ classes.typparagraph4 }>Tecnology</Typography>
                    <Typography className={ classes.typheader1 }>
                        The Impact of Technology on the Workplace:<br />
                        How Technology is Changing
                    </Typography>
                    <div className={ classes.divheader1 }>
                        <img src={profileicon} alt='profileicon' />
                        <Typography className={ classes.typparagraph3 } style={{ lineHeight: '20px', fontWeight: '500', marginLeft: '8px', marginRight: '24px'}}>Tracey Wilson</Typography>
                        <Typography className={ classes.typparagraph3 }>August 20, 2022</Typography>
                    </div>
                </div>
                <div>
                    <img src={image1} alt='image1' />
                </div>
                <div>
                    <Typography className={ classes.typparagraph }>
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that
                        last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare
                        adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your
                        travels. <br />
                        <br />
                        One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying
                        local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local
                        language can also go a long way in making connections and showing respect.
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Research Your Destination</Typography>
                    <Typography className={ classes.typparagraph }>
                        Before embarking on your journey, take the time to research your destination. This includes understanding the local culture,
                        customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate
                        your destination with confidence and avoid any cultural faux pas.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                        hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
                        euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Plan Your Itinerary</Typography>
                    <Typography className={ classes.typparagraph }>
                        While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                        <br />
                        <br />
                        Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typparagraph1 }>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</Typography>
                </div>
                <div>
                    <img src={image2} alt='image2' />
                </div>
                <div className={ classes.typparagraph2 }>
                    <Typography className={ classes.typparagraph3 }>Advertisement</Typography>
                    <Typography className={ classes.typparagraph3 } style={{ fontSize: '20px', lineHeight: '24px', fontWeight: '600'}}>You can place ads</Typography>
                    <Typography className={ classes.typparagraph3 } style={{ fontSize: '18px', lineHeight: '26px'}}>750x100</Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Pack Lightly and Smartly</Typography>
                    <Typography className={ classes.typparagraph }>
                        Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.                   
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Stay Safe and Healthy</Typography>
                    <Typography className={ classes.typparagraph }>
                        Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.                   
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Immerse Yourself in the Local Culture</Typography>
                    <Typography className={ classes.typparagraph }>
                        One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.                   
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Capture Memories</Typography>
                    <Typography className={ classes.typparagraph }>
                        Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.                   
                    </Typography>
                </div>
                <div>
                    <Typography className={ classes.typheader2 }>Conclusion:</Typography>
                    <Typography className={ classes.typparagraph }>
                        Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.                   
                    </Typography>
                </div>
            </Stack>
        </div>
    )
}

export default ArticlePage
