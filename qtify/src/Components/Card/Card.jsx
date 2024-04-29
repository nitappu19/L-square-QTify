import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip } from '@mui/material';
import {Tooltip} from '@mui/material';
export default function Card({album}) {

   return (
        <section>
             <Tooltip
    title={album.title}
    placement="top"
    arrow
    display="flex"
    justifyContent="center"
>
            <MuiCard sx={{ width: 159, height: 205, borderRadius: '10px' }}>
                <CardActionArea>
                    <CardMedia component='img' height='170' image={album.image} alt={album.title} />
                    <CardContent
                        sx={{
                            display: 'flex',
                            paddingInline: '0.8em',
                                }
                            }
                            label={album.follows}
                        >
                             <Chip
                            sx={{
                                color:'white',
                                height: 23,
                                fontSize: 10,
                                fontWeight: 400,
                                backgroundColor: `black`,
                                '& .MuiChip-label': {
                                    paddingInline: '0.8em',
                                },
                            }}
                            label={album.follows}
                        />
                    </CardContent>
                </CardActionArea>
            </MuiCard>
            <Typography
                component='span'
                sx={{
                    color:'white',
                    fontSize: 13,
                    fontWeight: 300,
                    width: 159,

                    marginTop: '0.5em',
                }}
            >
                {album.title}
            </Typography>
            </Tooltip>
        </section>
    );
}