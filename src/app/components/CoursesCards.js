'use client'

import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Tooltip from '@mui/material/Tooltip'
import { NotificationsSharp } from '@mui/icons-material'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ChatIcon from '@mui/icons-material/Chat'

const Courses = ({ courseCardInfo }) => {
  const getMuiIcon = (icon) => {
    switch (icon) {
      case 'assignments':
        return <AssignmentIcon />
      case 'announcement':
        return <NotificationsSharp />
      case 'files':
        return <InsertDriveFileIcon />
      case 'chat':
        return <ChatIcon />
      default:
        return null
    }
  }

  const getGrade = (courseGPA) => {
    switch (true) {
      case courseGPA >= 95:
        return `${courseGPA}% - A+`
      case courseGPA >= 90:
        return `${courseGPA}% - A`
      case courseGPA >= 85:
        return `${courseGPA}% - B+`
      case courseGPA >= 80:
        return `${courseGPA}% - B`
      case courseGPA >= 70:
        return `${courseGPA}% - C`
      case courseGPA >= 65:
        return `${courseGPA}% - D`
      case courseGPA >= 60:
        return `${courseGPA}% - E`
      default:
        return 'F'
    }
  }

  // console.log('courseCardInfo', courseCardInfo)

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 4,
          display: 'inline-flex',
          marginTop: '2rem',
        }}
      >
        <div style={{ width: 13.93, height: 13, background: 'black' }}></div>
        <div className="text-xl">Courses</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
        }}
      >
        {courseCardInfo.map(({ courseId, title, courseGPA }) => (
          <div
            key={courseId}
            style={{
              width: '320px',
              height: '200px',
              position: 'relative',
              margin: '12px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                background: 'white',
                boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
                borderRadius: 8,
                border: '1px #355070 solid',
                backdropFilter: 'blur(14px)',
              }}
            />
            <div
              style={{
                width: '44px',
                height: '12px',
                left: '264px',
                top: '12px',
                position: 'absolute',
                background:
                  'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: 8,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                display: 'inline-flex',
                color: '#0F4C5C',
                fontSize: '10px',
                fontFamily: 'Inter',
                fontWeight: '400',
              }}
            >
              <div>Fall 2023</div>
            </div>
            <div
              style={{
                width: '74px',
                height: '15px',
                left: '12px',
                top: '12px',
                position: 'absolute',
                background: 'white',
                borderRadius: 8,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                display: 'inline-flex',
                color: '#0F4C5C',
                fontSize: '12px',
                fontFamily: 'Inter',
                fontWeight: '400',
              }}
            >
              {courseGPA === 0 ? (
                <div>NR - %</div>
              ) : (
                <div>{getGrade(courseGPA)}</div>
              )}
            </div>
            <div
              style={{
                width: '258.71px',
                height: '42px',
                left: '11.29px',
                top: '72px',
                position: 'absolute',
              }}
            >
              <div
                style={{
                  width: '30.37px',
                  height: '15px',
                  left: '0',
                  top: '0',
                  position: 'absolute',
                  color: 'black',
                  fontSize: '12px',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                }}
              >
                {courseId.slice(-4)}
              </div>
              <div
                style={{
                  width: '258.71px',
                  height: '19px',
                  left: '0',
                  top: '23px',
                  position: 'absolute',
                  color: 'black',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                }}
              >
                {title}
              </div>
            </div>
            <div
              style={{
                width: '306px',
                height: '20px',
                paddingLeft: '32px',
                paddingRight: '32px',
                left: '11.29px',
                top: '154px',
                position: 'absolute',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '54px',
                display: 'inline-flex',
              }}
            >
              {[
                { icon: 'assignments', link: `/assignments/${courseId}` },
                { icon: 'announcement', link: `/announcements/${courseId}` },
                { icon: 'files', link: '/files' },
                { icon: 'chat', link: `/chat/${courseId}` },
              ].map((item) => (
                <Tooltip
                  key={item.icon}
                  title={`View ${item.icon}`}
                  placement="top"
                >
                  <a key={item.icon} href={item.link}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                      }}
                    >
                      {getMuiIcon(item.icon)}
                    </div>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses

//-------v6-------using mui components-----------
